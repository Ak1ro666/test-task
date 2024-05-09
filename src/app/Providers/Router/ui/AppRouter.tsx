import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routerConfig/routeConfig.tsx';
import { Suspense } from 'react';
import { Loader } from '@/widgets/Loader/ui/Loader.tsx';

export const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} element={<Suspense fallback={<Loader />}>
                        {element}
                    </Suspense>} path={path} />
                ))
            }s
        </Routes>
    );
};