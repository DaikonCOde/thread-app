// hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// components
import { Loader } from '../components/Loader';
import { PageLayout } from '../layout';
// pages
const Home = lazy(() => import('../views/Home/Home'));
const ClinicsFound = lazy(() => import('../views/ClinicsFound/ClinicsFound'));
const UploadImage = lazy(() => import('../views/UploadImage/UploadImage'));
const Thanks = lazy(() => import('../views/Thanks/Thanks'));

function Router() {
    return (
        <Suspense fallback={<Loader loading suspense />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/clinics" element={<ClinicsFound />} />
                        <Route path="/upload-image" element={<UploadImage />} />
                        <Route path="/thanks" element={<Thanks />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;
