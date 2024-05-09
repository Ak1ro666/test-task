import styles from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={styles.content}>
            <div className={styles['honeycomb']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
