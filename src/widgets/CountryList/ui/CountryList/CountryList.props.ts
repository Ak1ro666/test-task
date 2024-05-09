export interface CountryFlags {
    alt: string;
    png: string;
    svg: string;
}

export interface CountryName {
    common: string;
    official: string;
}

export interface Country {
    capital: string[];
    flag: string;
    name: CountryName;
    flags: CountryFlags;
}

export interface CountryListProps {
    countryList: Country[];
    isLoading: boolean;
    error: String | Error;
    startIndex: number

}