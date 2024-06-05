import React, { useEffect, useState } from 'react';

import { Pagination } from '@/components/pagination/Pagination.component.tsx';
import { ProductsComponent } from '@/components/product/Products.component.tsx';
import { SearchBar } from '@/components/searchbar/SearchBar.component.tsx';
import type { Product } from '@/interfaces/Product.ts';
import getData from '@/utils/getData.ts';
import { getPaginatedProducts } from '@/utils/getPaginated.ts';

import styles from './Product.module.css';

export default function ProductList() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products';
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        getData(apiUrl)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const paginated = getPaginatedProducts(products, currentPage);
        setPaginatedProducts(paginated);

        setTotalPages(Math.ceil(products.length / 8));
    }, [products, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFilteredProducts = (filteredProducts: Product[]) => {
        setPaginatedProducts(filteredProducts);
        const paginated = getPaginatedProducts(filteredProducts, currentPage);
        setPaginatedProducts(paginated);
        setTotalPages(Math.ceil(filteredProducts.length / 8));
    };

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
