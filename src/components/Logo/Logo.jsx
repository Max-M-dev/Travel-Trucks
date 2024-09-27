
import { useNavigate } from 'react-router-dom';
import css from './Logo.module.css'

const Logo = () => {

    const navigate = useNavigate();

    const logoClick = () => {
        navigate('/');
    };

    return (
        <div className={css.logo} onClick={logoClick}>
            <svg width="136" height="16">
                <use href="/sprite.svg#icon-logo" >
                </use>
            </svg>
        </div>
    )
}

export default Logo
