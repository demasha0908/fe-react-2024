import React, { useEffect, useRef, useState } from 'react';

import { ArrowDownIcon } from '@/assets/ArrowDown.tsx';
import { ArrowUpIcon } from '@/assets/ArrowUp.tsx';
import { filters } from '@/interfaces/filters.ts';
import type { Product } from '@/interfaces/Product.ts';

import styles from './SearchBar.module.css';

interface SearchProps {
    products: Product[];
    currentPage: number;
    onPageChange: (page: number) => void;
    onFilteredProducts: (products: Product[]) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ products, currentPage, onPageChange, onFilteredProducts }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('');
    const [currentSort, setCurrentSort] = useState<string>('Price (High - Low)');
    const buttonReference = useRef<HTMLButtonElement>(null);
    const dropdownReference = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let filtered = products;

        if (searchTerm) {
            filtered = filtered.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        if (activeCategories.length > 0) {
            filtered = filtered.filter((product) => activeCategories.includes(product.category.name));
        }

        if (activeFilter) {
            switch (activeFilter) {
                case 'price-asc': {
                    filtered = filtered.sort((a, b) => a.price - b.price);
                    break;
                }
                case 'price-desc': {
                    filtered = filtered.sort((a, b) => b.price - a.price);
                    break;
                }
                case 'newest': {
                    filtered = filtered.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());
                    break;
                }
                case 'oldest': {
                    filtered = filtered.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());
                    break;
                }
            }
        }

        onFilteredProducts(filtered);
    }, [activeFilter, searchTerm, activeCategories, products, currentPage]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownReference.current &&
                !dropdownReference.current.contains(event.target as Node) &&
                buttonReference.current &&
                !buttonReference.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        onPageChange(1);
    };

    const handleDropdown = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        } else {
            setActiveFilter('');
            if (!activeFilter) {
                setActiveFilter('price-desc');
            }
            setIsDropdownOpen(true);
        }
    };

    const handleCategory = (category: string) => {
        setActiveCategories((previousCategories) =>
            previousCategories.includes(category)
                ? previousCategories.filter((cat) => cat !== category)
                : [...previousCategories, category],
        );
        onPageChange(1);
    };

    const handleFilter = (filterKey: string, filterName: string) => {
        setActiveFilter(filterKey);
        setCurrentSort(filterName);
        onPageChange(1);
        setIsDropdownOpen(false);
    };

    const filteredFilters = filters.filter((item) => item.label !== currentSort);

    return (
        <div className={styles.search__section}>
            <div className={styles.search__block}>
                <input
                    className={styles.search__input}
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    value={searchTerm}
                />
                <button className={styles.search__button}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.25 11.25L15.75 15.75M7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75Z"
                            stroke="#FFF"
                            strokeWidth="1.5"
                        />
                    </svg>
                </button>
            </div>

            <div className={styles.filtersWrapper}>
                <div className={styles.filters}>
                    {['Electronics', 'Shoes', 'Clothes'].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategory(category)}
                            className={`${styles.filtersButton} ${activeCategories.includes(category) ? styles.activefilters : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.dropdown__menu}>
                    <h3 className={styles.dropdown__title}> Sort by:</h3>
                    <button
                        onClick={handleDropdown}
                        className={`${styles.dropdown__button} ${isDropdownOpen ? styles.dropdown__buttonActive : ''}`}
                        ref={buttonReference}
                    >
                        {currentSort} {isDropdownOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </button>

                    {isDropdownOpen && (
                        <ul className={styles.dropdown__content}>
                            {filteredFilters.map((item) => (
                                <li
                                    role="button"
                                    key={item.key}
                                    onClick={() => handleFilter(item.key, item.label)}
                                    className={`${styles.dropdown__element} ${activeFilter === item.key ? styles.dropdown__elementActive : ''}`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
