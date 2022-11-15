// hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// components
import { Loader } from '../components/Loader';
import { PageLayout } from '../layout';
// pages
const Home = lazy(() => import('../views/Home/Home'));

function Router() {
    return (
        <Suspense fallback={<Loader loading suspense />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;
