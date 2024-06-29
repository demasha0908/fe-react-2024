import React from 'react';

import { ErrorMessage } from '@/components/messages/Error.component';
import { LoadingMessage } from '@/components/messages/Loading.component';
import { NoFoundMessage } from '@/components/messages/NoFound.component';
import styles from '@/components/product/Product.module.css';
import ProductCard from '@/components/product/ProductCard.component.tsx';
import type { Product } from '@/interfaces/Product.ts';

interface ProductProps {
    productsList: any[];
    isError: boolean;
    isLoading: boolean;
    isMobile: boolean;
}

export function ProductsComponent({ productsList, isError, isLoading, isMobile }: ProductProps) {
    if (isLoading) {
        return isMobile ? <></> : LoadingMessage();
    }

    if (isError) {
        return ErrorMessage();
    }

    if (productsList.length === 0) {
        return NoFoundMessage();
    }

    return (
        <div className={styles.container}>
            <ul className={styles.product__list}>
                {productsList.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}
