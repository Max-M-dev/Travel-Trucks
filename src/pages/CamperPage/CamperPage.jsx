
import css from './CamperPage.module.css'

import { useNavigate, useLocation, useParams, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import BookForm from '../../components/BookForm/BookForm';
import { fetchCampersById } from '../../redux/Vehicles/operations';

import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/vehicles/selectors';
import { selectCamperById } from '../../redux/vehicles/selectors';


const CamperPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    const { id } = useParams();

    const camper = useSelector((state) => selectCamperById(state, id));

    // console.log(camper);

    // console.log(id);

    useEffect(() => {
        if (location.pathname === `/catalog/${id}`) {
            navigate('features', { replace: true });
        }
    }, [navigate, location.pathname, id]);

    useEffect(() => {
        if (id) {
            dispatch(fetchCampersById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!camper) {
        return <p>No camper found</p>;
    }

    return (
        <div>
            <div className={css.container}>
                <h2 className={css.title}>{camper.name}</h2>
                <div className={css.middle}>
                    <div className={css.paragraph}>
                        <svg className={css.star} width="16" height="16" >
                            <use href="/sprite.svg#icon-star" >
                            </use>
                        </svg>
                        <p>{camper.rating}({camper.reviews.length} Reviews)</p>
                    </div>
                    <div className={css.paragraph}>
                        <svg width="16" height="16">
                            <use href="/sprite.svg#icon-map" >
                            </use>
                        </svg>
                        <p>{camper.location}</p>
                    </div>
                </div>
                <p className={css.title}>€{camper.price.toFixed(2)}</p>
                <ul className={css.list}>
                    {camper.gallery.map((image, index) => (
                        <li className={css.item} key={index}>
                            <img
                                key={index}
                                src={image.original}
                                alt={`Camper image ${index + 1}`}
                                className={css.image}
                            />
                        </li>
                    ))}
                </ul>
                <p className={css.text}>{camper.description}</p>
                <ul className={css.menu}>
                    <li className={css.li}>
                        <NavLink
                            className={({ isActive }) => isActive ? css.activeLink : css.link}
                            to="features"
                        >
                            Features
                        </NavLink>
                    </li>
                    <li className={css.li}>
                        <NavLink
                            className={({ isActive }) => isActive ? css.activeLink : css.link}
                            to="reviews"
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={css.bottom}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet context={{ camper }} />
                </Suspense>
                <BookForm />
            </div>
        </div>
    )
}

export default CamperPage
