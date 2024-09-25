
import { Suspense } from 'react';
import Navigation from "../Navigation/Navigation"


const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}

export default Layout
