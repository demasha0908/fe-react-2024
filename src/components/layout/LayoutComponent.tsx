import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/footer/Footer.component';
import HeaderComponent from '@/components/header/Header.component';
import { getInitialTheme } from '@/components/themeswitch/ThemeSwitch.tsx';
import type { ActiveTheme } from '@/interfaces/Themes.ts';

import styles from './Layout.module.css';

export const LayoutComponent = () => {
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
