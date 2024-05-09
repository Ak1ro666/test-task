import { useLocation, useParams } from 'react-router-dom';
import { Country } from '@/widgets/CountryList';

import styles from './DynamicCountryPage.module.scss';

export const DynamicCountryPage = () => {

    const { id } = useParams();
    const { state: { country } }: { state: { country: Country } } = useLocation();
    return (
        <div className={styles.DynamicCountryPage}>
            <h1>Страница номер {id}</h1>
            <div className={styles.content}>
                <div>
                    <h2>
                        {country.name.official}
                    </h2>
                    <p>{country.name.common}</p>
                    {country.capital.map((flag) => <p key={flag}>{flag}</p>)}
                    <h3>{country.flag}</h3>
                </div>

                <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
        </div>
    );
};