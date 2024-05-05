import { useState } from 'react';

import AboutComponent from '@/components/about/About.component';
import FooterComponent from '@/components/footer/Footer.component';
import HeaderComponent from '@/components/header/Header.component';
import ProductList from '@/components/product/ProductList.component';

import styles from './App.module.css';

function App() {
    const [isShowAbout, setIsShowAbout] = useState(true);

    const toggleAbout = () => {
        setIsShowAbout(true);
    };

    const toggleProducts = () => {
        setIsShowAbout(false);
    };
    return (
        <>
            <HeaderComponent toggleAbout={toggleAbout} toggleProducts={toggleProducts} />
            <main>
                <div className={styles.container}>{isShowAbout ? <AboutComponent /> : <ProductList />}</div>
            </main>
            <FooterComponent />
        </>
    );
}

export default App;
