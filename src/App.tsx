import { useState } from 'react';

import AboutComponent from '@/components/about/About.component';
import FooterComponent from '@/components/footer/Footer.component';
import HeaderComponent from '@/components/header/Header.component';
import ProductList from '@/components/product/ProductList.component';

import styles from './App.module.css';

function App() {
    const [shouldShowAbout, setShouldShowAbout] = useState<boolean>(true);
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const toggleAbout = (isShowAbout: boolean) => {
        setShouldShowAbout(isShowAbout);
    };

    return (
        <>
            <div className={`${theme}-theme`}>
                <HeaderComponent shouldShowAbout={shouldShowAbout} toggleAboutState={toggleAbout} changeTheme={changeTheme} />
                <main>
                    <div className={styles.container}>{shouldShowAbout ? <AboutComponent /> : <ProductList />}</div>
                </main>
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
