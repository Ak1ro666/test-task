import { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { CountryPage } from '@/pages/CountryPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { DynamicCountryPage } from '@/pages/DynamicCountryPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    COUNTRY = 'country',
    DYNAMIC_COUNTRY = 'dynamic_country',
    NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.COUNTRY]: '/country',
    [AppRoutes.DYNAMIC_COUNTRY]: '/country/:id',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    [AppRoutes.COUNTRY]: {
        path: RoutePaths.country,
        element: <CountryPage />
    },
    [AppRoutes.DYNAMIC_COUNTRY]: {
        path: RoutePaths.dynamic_country,
        element: <DynamicCountryPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />
    },
};