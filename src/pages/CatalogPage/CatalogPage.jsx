
import CatalogList from "../../components/CatalogList/CatalogList"
import Filters from "../../components/Filters/Filters"

import css from './CatalogPage.module.css';

const CatalogPage = () => {
    return (
        <main className={css.container}>
            <Filters />
            <CatalogList />
        </main>
    )
}

export default CatalogPage
