import generalimg from '@/assets/generalimg.png';

import styles from './about.module.css';

export function AboutPage() {
    return (
        <div className={styles.about}>
            <div className={styles.about__imgBox}>
                <img className={styles.about__img} src={generalimg} alt="generalimg" />
            </div>
            <div className={styles.about__text}>
                <h1 className={styles.about__title}>About me</h1>
                <div className={styles.about__info}>
                    <p className={styles.about__paragraph}>
                        Hi! My name is Mariia and I`m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                        React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className={styles.about__paragraph}>
                        This page was developed during the course{' '}
                        <a className={styles.about__textlink} href="https://www.mastersacademy.education/frontend-for-beginners-it">
                            `Intro to React`
                        </a>{' '}
                        from Masters Academy in 2024.
                    </p>
                    <p className={styles.about__paragraph}>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className={styles.about__paragraph}>
                        You can contact me via{' '}
                        <a
                            className={styles.about__textlink}
                            href="https://www.instagram.com/mary.demch?igsh=MXFnc3c3eDZuNjgyNw%3D%3D&utm_source=qr"
                        >
                            Instagram
                        </a>{' '}
                        and/or check out my{' '}
                        <a className={styles.about__textlink} href="https://github.com/demasha0908">
                            GitHub
                        </a>{' '}
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
