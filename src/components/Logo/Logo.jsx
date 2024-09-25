
import css from './Logo.module.css'

const Logo = () => {
    return (
        <div>
            <svg width="136" height="16" className={css.logo}>
                <use href="/sprite.svg#icon-logo" >
                </use>
            </svg>
        </div>
    )
}

export default Logo
