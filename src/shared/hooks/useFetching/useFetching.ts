import { useState } from 'react';

export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<Error>();


    async function fetchData(ignore?: boolean) {
        try {
            setIsLoading(true);
            if (ignore === undefined) {
                await callback();
                setIsError(undefined)
            }

            if (!ignore) {
                await callback();
                setIsError(undefined)
            }

        } catch (error: any) {
            if (ignore === undefined) {
                setIsError(error?.message);
            }

            if (!ignore) {
                setIsError(error?.message);
            }
        } finally {
            if (ignore === undefined) {
                setIsLoading(false);
            }

            if (!ignore) {
                setIsLoading(false);
            }
        }
    }

    return [fetchData, isLoading, isError];
};