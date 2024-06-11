import { HashRouter, Route, Routes } from 'react-router-dom';

import AboutComponent from '@/components/about/About.component';
import { LayoutComponent } from '@/components/layout/LayoutComponent.tsx';
import NotFound from '@/components/notfound/NotFound.component.tsx';
import ProductList from '@/components/product/ProductList.component';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<LayoutComponent />}>
                    <Route index element={<AboutComponent />} />
                    <Route path={'products'} element={<ProductList />} />
                    <Route path={'*'} element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
