import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App.tsx';

import './app/styles/index.scss';
import { ErrorBoundary } from '@/app/Providers/ErrorBoundary/ErrorBoundary.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
);
