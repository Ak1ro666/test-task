import { FC } from 'react';

import { CountryListProps } from './CountryList.props.ts';

import styles from './CountryList.module.scss';
import { CountryItem } from '@/widgets/CountryList/ui/CountryItem/CountryItem.tsx';

export const CountryList: FC<CountryListProps> = (props) => {
    const {
        countryList,
        isLoading,
        error,
        startIndex
    } = props;


    if (isLoading) return <h1>Идёт загрузка...</h1>;

    if (error) return <h1>Ошибка при получении данных!</h1>;

    if (!countryList.length) return <h1>Не найдено!</h1>;

    return (
        <div className={styles.CountryList}>
            <h1>Страны</h1>
            <ul className={styles.list}>
                {
                    countryList
                        .map((country, index) =>
                            <CountryItem
                                key={country.name.official}
                                number={startIndex + index + 1}
                                country={country}
                            />,
                        )
                }
            </ul>
        </div>
    );

};