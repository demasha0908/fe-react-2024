import React, { useEffect, useState } from 'react';

import { Pagination } from '@/components/pagination/Pagination.component.tsx';
import { ProductsComponent } from '@/components/product/Products.component.tsx';
import { SearchBar } from '@/components/prolyfilters/SearchBar.component.tsx';
import { useFilteredProducts, usePaginatedProducts, useSearchedProducts, useSortedProducts } from '@/hooks/productHooks.ts';
import type { Product } from '@/interfaces/Product.ts';
import getData from '@/utils/getData.ts';

import styles from './Product.module.css';

export default function ProductList() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products';
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<string[]>([]);
    const [sort, setSort] = useState<string>('newest');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const itemsPerPage = 8;

    const filteredProducts = useFilteredProducts(products, filters);
    const searchedProducts = useSearchedProducts(filteredProducts, searchQuery);
    const sortedProducts = useSortedProducts(searchedProducts, sort);
    const shownProducts = usePaginatedProducts(sortedProducts, currentPage, itemsPerPage);

    useEffect(() => {
        getData(apiUrl)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleFilterChange = (filter: string) => {
        setFilters((previousFilters) =>
            previousFilters.includes(filter) ? previousFilters.filter((f) => f !== filter) : [...previousFilters, filter],
        );
        setCurrentPage(1);
    };

    return (
        <section className={styles.product__section}>
            <SearchBar setFilter={handleFilterChange} setSort={setSort} setSearchQuery={setSearchQuery} />
            <ProductsComponent products={shownProducts} />
            <Pagination page={currentPage} limit={itemsPerPage} total={sortedProducts.length} setCurrentPage={setCurrentPage} />
        </section>
    );
}
