import carticon from '@/assets/cart.svg';
import Divider from '@/assets/divider.svg';
import loginicon from '@/assets/login.svg';
import logo from '@/assets/logo.svg';
import mobilemenu from '@/assets/mobilemenu.svg';
import DarkThemeBtn from '@/assets/moon.svg';
import signicon from '@/assets/sign.svg';
import LightThemeBtn from '@/assets/sun.svg';

import styles from './header.module.css';

interface HeaderProps {
    shouldShowAbout: boolean;
    toggleAboutState: (isShowAbout: boolean) => void;
}
function HeaderComponent({ shouldShowAbout, toggleAboutState }: HeaderProps) {
    const showAbout = () => {
        toggleAboutState(true);
    };

    const showProducts = () => {
        toggleAboutState(false);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <div className={styles.header__themes}>
                        <button className={`${styles.header__themeBtn} ${styles.header__themeBtnactive}`}>
                            <img className={styles.header__themeimg} src={LightThemeBtn} alt="LightTheme" />
                        </button>
                        <img className={styles.divider} src={Divider} alt="Divider" />
                        <button className={styles.header__themeBtn}>
                            <img className={styles.header__themeimg} src={DarkThemeBtn} alt="DarkTheme" />
                        </button>
                    </div>

                    <nav className={styles.header__nav}>
                        <ul className={styles.header__navwrapper}>
                            <li>
                                <button
                                    className={`${styles.header__link} ${shouldShowAbout ? styles.header__linkactive : ''}`}
                                    onClick={showAbout}
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`${styles.header__link} ${shouldShowAbout ? '' : styles.header__linkactive}`}
                                    onClick={showProducts}
                                >
                                    Products
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.header__navright}>
                        <button className={styles.header__cart}>
                            <img className={styles.header__carticon} src={carticon} alt="cart" />
                        </button>
                        <button className={styles.header__mobilemenu}>
                            <img className={styles.header__mobilemenu} src={mobilemenu} alt="Mobile Menu" />
                        </button>
                        <button className={styles.header__login}>
                            <img className={styles.header__loginicon} src={loginicon} alt="Login" />
                            Login
                        </button>

                        <button className={styles.header__sign} title="Sign">
                            <img className={styles.header__signicon} src={signicon} alt="Sign" />
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderComponent;
