import { FC } from 'react';

import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
    return (
        <header>
            <nav className={styles.Navbar}>
                <h2>Navbar</h2>
            </nav>
        </header>
    );
};
