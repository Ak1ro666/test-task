import React, { ErrorInfo, ReactNode } from 'react';
import { ErrorPage } from '@/pages/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // @ts-ignore
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;


        if (hasError) {
            return <ErrorPage />;
        }

        return children;
    }
}
