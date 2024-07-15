import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Pagination } from '@/components/pagination/Pagination.component.tsx';
import { ProductsComponent } from '@/components/product/Products.component.tsx';
import { SearchBar } from '@/components/prolyfilters/SearchBar.component.tsx';
import type { Product } from '@/interfaces/Product.ts';
import { ProductsDataContext } from '@/utils/Products';

import styles from './Product.module.css';

const MOBILE_WIDTH = 900;
const SCROLL_THRESHOLD = 150;
const ITEMS_PER_PAGE = 8;

export default function ProductsPage() {
    const { productsList, isError, isLoading, totalProducts, fetchProducts } = useContext(ProductsDataContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryNumber, setCategoryNumber] = useState<string>('0');
    const [sort, setSort] = useState<string>('newest');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);
    const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_WIDTH);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetchProducts({
            limit: ITEMS_PER_PAGE,
            offset: (currentPage - 1) * ITEMS_PER_PAGE,
            categoryId: categoryNumber,
            title: searchQuery,
            sortOrder: sort === 'newest' ? 'asc' : 'desc',
        });
    }, [currentPage, categoryNumber, sort, searchQuery, fetchProducts]);

    useEffect(() => {
        if (isMobile) {
            setProducts((previousProducts) => [...previousProducts, ...productsList]);
        } else {
            setProducts(productsList);
        }
    }, [productsList, isMobile]);

    const handleFilterChange = (number: string) => {
        setCategoryNumber(number);
        setCurrentPage(1);
        setProducts([]);
    };

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + Math.ceil(window.scrollY) >= document.body.scrollHeight - SCROLL_THRESHOLD &&
            !isLoading &&
            currentPage < totalPages
        ) {
            setCurrentPage(currentPage + 1);
        }
    }, [isLoading, currentPage, totalPages]);

    useEffect(() => {
        if (isMobile) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isMobile, handleScroll]);

    return (
        <section className={styles.product__section}>
            <SearchBar setFilter={handleFilterChange} setSort={setSort} setSearchQuery={setSearchQuery} />
            <ProductsComponent productsList={products} isError={isError} isLoading={isLoading} isMobile={isMobile} />
            {!isMobile && <Pagination page={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />}
        </section>
    );
}
