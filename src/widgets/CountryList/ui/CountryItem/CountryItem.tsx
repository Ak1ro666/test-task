import { Link } from 'react-router-dom';
import { CountryItemProps } from './CountryItem.props.ts';

import styles from './CountryItem.module.scss'
import { getCountryUrl } from '@/shared/config/urlConfig/urlConfig.ts';

export const CountryItem = ({ country, number }: CountryItemProps) => {
    return (
        <li className={styles.CountryItem}>
            <Link to={{ pathname: getCountryUrl(`/${number}`)}} state={{ country: country }} >
                <div>
                    <p>{`${number}.`}</p>
                    {
                        country.name.common
                    }
                    <p>{country.flag}</p>
                </div>
                <div>
                    <img src={country.flags.svg} alt={country.flags.alt} />
                </div>
            </Link>
        </li>
    )
}