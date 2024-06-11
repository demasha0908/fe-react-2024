import type { ActiveTheme } from '@/interfaces/Themes.ts';

export const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme') as ActiveTheme;

    if (savedTheme) {
        return savedTheme;
    }

    const isLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return isLightMode ? 'light' : 'dark';
};
