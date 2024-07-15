import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MobileMenu.module.css';

interface BurgerMenuProps {
    isOpen: boolean;
    handleIsOpen: () => void;
}

function BurgerMenu({ isOpen, handleIsOpen }: BurgerMenuProps) {
    const burgerNavLinkClasses = (isActive: boolean) => `${styles.burgerLink} ${isActive ? styles.active : ''}`;

    return (
        <div className={`${styles.burgerMenu} ${styles.mobile} ${isOpen ? styles.open : ''}`}>
            <div className="container">
                <div className={styles.burgerMenuWrapper}>
                    <nav className={styles.burgerMenuNav}>
                        <ul>
                            <li onClick={handleIsOpen}>
                                <NavLink to="/" className={({ isActive }) => burgerNavLinkClasses(isActive)} end={true}>
                                    About
                                </NavLink>
                            </li>
                            <li onClick={handleIsOpen}>
                                <NavLink to="products" className={({ isActive }) => burgerNavLinkClasses(isActive)}>
                                    Products
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export { BurgerMenu };
