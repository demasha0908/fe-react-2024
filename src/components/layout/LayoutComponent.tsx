import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/footer/Footer.component';
import HeaderComponent from '@/components/header/Header.component';
import type { ActiveTheme } from '@/interfaces/Themes.ts';

import styles from './Layout.module.css';

export const LayoutComponent = () => {
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

    return (
        <>
            <div className={theme === 'light' ? styles.light : styles.dark}>
                <HeaderComponent onThemeChange={handleThemeChange} currentTheme={theme} />
                <Outlet />
                <FooterComponent />
            </div>
        </>
    );
};
