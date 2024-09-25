
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo';

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <header className={css.head}>
            <Logo />
            <nav className={css.nav}>
                <NavLink className={css.link} to="/">Home</NavLink>
                <NavLink className={css.link} to="/catalog">Catalog</NavLink>
            </nav>
        </header>
    )
}

export default Navigation
