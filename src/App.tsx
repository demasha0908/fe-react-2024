import { useState } from 'react';

import AboutComponent from '@/components/about/About.component';
import FooterComponent from '@/components/footer/Footer.component';
import HeaderComponent from '@/components/header/Header.component';
import ProductList from '@/components/product/ProductList.component';
import type { ActiveTheme } from '@/interfaces/Themes.ts';

import styles from './App.module.css';
function App() {
    const [shouldShowAbout, setShouldShowAbout] = useState<boolean>(true);

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme') as ActiveTheme;

        if (savedTheme) {
            return savedTheme;
        }

        const isLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        return isLightMode ? 'light' : 'dark';
    };

    const [theme, setTheme] = useState<ActiveTheme>(() => getInitialTheme());

    const handleThemeChange = (newTheme: ActiveTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleAbout = (isShowAbout: boolean) => {
        setShouldShowAbout(isShowAbout);
    };

    return (
        <>
            <div className={theme === 'light' ? styles.light : styles.dark}>
                <HeaderComponent
                    shouldShowAbout={shouldShowAbout}
                    toggleAboutState={toggleAbout}
                    onThemeChange={handleThemeChange}
                    currentTheme={theme}
                />
                <main>
                    <div className={styles.container}>{shouldShowAbout ? <AboutComponent /> : <ProductList />}</div>
                </main>
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
