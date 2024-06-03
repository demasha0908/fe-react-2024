import React, { useEffect, useState } from 'react';

import { Pagination } from '@/components/product/Pagination.component.tsx';
import { ProductsComponent } from '@/components/product/Products.component.tsx';
import { SearchBar } from '@/components/searchbar/SearchBar.component.tsx';
import type { Product } from '@/interfaces/Product.ts';

import styles from './Product.module.css';

export default function ProductList() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products';
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                const paginated = getPaginatedProducts(data);
                setPaginatedProducts(paginated);

                setTotalPages(Math.ceil(data.length / 8));
            });
    });

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFilteredProducts = (filteredProducts: Product[]) => {
        setPaginatedProducts(filteredProducts);
        const paginated = getPaginatedProducts(filteredProducts);
        setPaginatedProducts(paginated);
        setTotalPages(Math.ceil(filteredProducts.length / 8));
    };

    const getPaginatedProducts = (data: Product[]): Product[] => data.slice((currentPage - 1) * 8, currentPage * 8);

    return (
        <section className={styles.product__section}>
            <SearchBar
                products={products}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onFilteredProducts={handleFilteredProducts}
            />
            <ProductsComponent products={paginatedProducts} />
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
        </section>
    );
}
