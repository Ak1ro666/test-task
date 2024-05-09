import { Button } from '@/shared/ui/Button';

import styles from './ErrorPage.module.scss'
import { Link } from 'react-router-dom';
import { getMainUrl } from '@/shared/config/urlConfig/urlConfig.ts';
import { useCallback } from 'react';

export const ErrorPage = () => {
    const reloadPage = useCallback(() => {
        location.reload();
    }, []);

    return (
        <div className={styles.ErrorPage}>
            <h2>Произошла непредвиденная ошибка!</h2>
            <Button onClick={reloadPage}>
                Обновить страницу!
            </Button>
            <Link to={getMainUrl()}>
                Перейти на главную страницу!
            </Link>
        </div>
    );
};