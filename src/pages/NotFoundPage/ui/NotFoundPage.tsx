import { Link } from 'react-router-dom';
import { RoutePaths } from '@/shared/config/routerConfig/routeConfig.tsx';

import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
    return (
        <div className={styles.NotFoundPage}>
            <h1>
                Страница не найдена!
            </h1>
            <Link to={RoutePaths.main}>
                Перейти на главную страницу
            </Link>
        </div>
    );
};

