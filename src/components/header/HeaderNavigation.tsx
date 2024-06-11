import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.css';

export const HeaderNavigationComponent: React.FC = () => {
    const headerNavLinkClasses = (isActive: boolean) => `${styles.header__link} ${isActive ? styles.header__linkactive : ''}`;

    return (
        <ul className={styles.header__navwrapper}>
            <li>
                <NavLink to="/" className={({ isActive }) => headerNavLinkClasses(isActive)} end={true}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="products" className={({ isActive }) => headerNavLinkClasses(isActive)}>
                    Products
                </NavLink>
            </li>
        </ul>
    );
};
