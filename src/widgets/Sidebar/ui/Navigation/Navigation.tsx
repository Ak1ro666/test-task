import { Link } from 'react-router-dom';
import { RoutePaths } from '@/shared/config/routerConfig/routeConfig.tsx';

export const Navigation = () => {
    return <ul>
        <li>
            <Link to={RoutePaths.main}>
                Main
            </Link>
        </li>
        <li>
            <Link to={RoutePaths.about}>
                About
            </Link>
        </li>
        <li>
            <Link to={RoutePaths.country}>
                Country
            </Link>
        </li>
    </ul>;
};