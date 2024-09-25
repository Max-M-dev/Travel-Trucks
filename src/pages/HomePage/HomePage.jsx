
import { NavLink } from 'react-router-dom'
import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <main className={css.homePage} >
            <div className={css.container}>
                <div className={css.wrapper}>
                    <h1 className={css.title}>Campers of your dreams</h1>
                    <h2 className={css.text}>You can find everything you want in our catalog</h2>
                    <NavLink className={css.btn} to="/catalog">View now</NavLink>
                </div>
            </div>
        </main>
    )
}

export default HomePage
