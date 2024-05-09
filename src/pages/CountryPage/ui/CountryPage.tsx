import { useEffect, useMemo, useState } from 'react';
import { countryServices } from '@/shared/services/countryServices/countryServices.ts';
import { useFetching } from '@/shared/hooks/useFetching/useFetching.ts';
import { Country, CountryList } from '@/widgets/CountryList';
import { getPageCount } from '@/shared/utils/pages.ts';
import { usePagination } from '@/shared/hooks/usePagination/usePagination.tsx';
import { Button } from '@/shared/ui/Button';
import styles from './CountryPage.module.scss';

const CountryPage = () => {
    const [country, setCountry] = useState<Country[]>();
    const [totalPages, setTotalPages] = useState<number>(0);
    const [limit, setLimit] = useState<number>(12);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [fetchCountryData, isLoadingCountry, errorCountry] = useFetching(async function() {
        const countryData = await countryServices.getAll();
        setCountry(countryData || []);
        const totalCount = countryData.length || 0;
        setTotalPages(getPageCount(totalCount, limit));
    });
    let pagesArray = useMemo(() => usePagination(totalPages), [totalPages]);

    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    let displayedCountries = country?.slice(startIndex, endIndex) || [];


    useEffect(() => {
        let ignore = false;

        // @ts-ignore
        fetchCountryData(ignore);

        () => {
            ignore = true;
        };
    }, []);


    return <div className={styles.CountryPage}>
        <CountryList countryList={displayedCountries || []}
                     isLoading={isLoadingCountry as boolean}
                     error={errorCountry as Error | String}
                     startIndex={startIndex}
        />

        <div className={styles.pagination}>
            {
                pagesArray.map((page) =>
                    <Button key={page} onClick={() => setCurrentPage(page)} square
                            className={currentPage === page ? styles.activeButton : ''}>
                        {page}
                    </Button>)
            }
        </div>
    </div>;
};

export default CountryPage;