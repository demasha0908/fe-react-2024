import Facebook from '@/assets/fb.png';
import Instagram from '@/assets/insta.png';
import Linkedin from '@/assets/linkedin.png';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__content}>
            <ul className={styles.footer__links}>
                <li>
                    <a className={styles.footer__link} href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
                        <img className={styles.linkicon} src={Facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a className={styles.footer__link} href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <img className={styles.linkicon} src={Linkedin} alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a className={styles.footer__link} href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img className={styles.linkicon} src={Instagram} alt="Instagram" />
                    </a>
                </li>
            </ul>
            <p className={styles.footer__text}>
                Made with 💗 on course{' '}
                <a className={styles.footer__courselink} href="https://www.mastersacademy.education/frontend-for-beginners-it">
                    `Intro to React` from Masters Academy in 2024
                </a>{' '}
                by Mariia
            </p>
        </div>
    </footer>
);
