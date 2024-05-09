import { FC } from 'react';

import { Navbar } from '@/widgets/navbar';
import { Footer } from '@/widgets/Footer';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/Providers/Router';

export const App: FC = () => {
    return (
        <div className='app'>
            <Navbar />
            <main className='wrapper'>
                <Sidebar />
                <div className='site-content'>
                    <AppRouter />
                </div>
            </main>
            <Footer />
        </div>
    );
};
