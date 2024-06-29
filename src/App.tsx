import { Route, Routes } from 'react-router-dom';

import AboutPage from '@/components/about/About.component.tsx';
import { LayoutComponent } from '@/components/layout/LayoutComponent.tsx';
import NotFound from '@/components/notfound/NotFound.component.tsx';
import ProductsPage from '@/components/product/ProductsPage.component.tsx';
import { ProductsDataContextProvider } from '@/utils/Products';

export default function App() {
    return (
        <ProductsDataContextProvider>
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<AboutPage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ProductsDataContextProvider>
    );
}
