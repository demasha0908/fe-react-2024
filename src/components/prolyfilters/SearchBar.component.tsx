import React, { useState } from 'react';

import { Selectors } from '@/components/selector/Selector.component.tsx';

import styles from './SearchBar.module.css';

interface SearchProps {
    setFilter: (filter: string) => void;
    setSort: (sort: string) => void;
    setSearchQuery: (query: string) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ setFilter, setSort, setSearchQuery }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');

    const handleFilterChange = (filter: string) => {
        setSelectedFilters((previousFilters) =>
            previousFilters.includes(filter) ? previousFilters.filter((f) => f !== filter) : [...previousFilters, filter],
        );
        setFilter(filter);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = () => {
        setSearchQuery(searchInput);
    };

    return (
        <div className={styles.filters_bar}>
            <form
                className={styles.filters_bar__search}
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSearchSubmit();
                }}
            >
                <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearchChange} />
                <button className={styles.filters_bar__btn}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.25 11.25L15.75 15.75M7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75Z"
                            stroke="#FFF"
                            strokeWidth="1.5"
                        />
                    </svg>
                </button>
            </form>

            <div className={styles.filters}>
                <button
                    className={`${styles.filter__btn} ${selectedFilters.includes('Electronics') ? styles.filters_btn_active : ''}`}
                    onClick={() => handleFilterChange('Electronics')}
                >
                    Electronics
                </button>
                <button
                    className={`${styles.filter__btn} ${selectedFilters.includes('Shoes') ? styles.filters_btn_active : ''}`}
                    onClick={() => handleFilterChange('Shoes')}
                >
                    Shoes
                </button>
                <button
                    className={`${styles.filter__btn} ${selectedFilters.includes('Clothes') ? styles.filters_btn_active : ''}`}
                    onClick={() => handleFilterChange('Clothes')}
                >
                    Clothes
                </button>
            </div>
            <div className={styles.sort_by}>
                <h3 className={styles.sort_by__text}> Sort by:</h3>
                <Selectors setSort={setSort} />
            </div>
        </div>
    );
};
