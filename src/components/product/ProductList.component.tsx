import React from 'react';

import SearchBar from '@/components/searchbar/SearchBar.component.tsx';
import data from '@/data/products.json';
import type { Product } from '@/interfaces/Product';

import ProductCard from './ProductCard.component';

import styles from './Product.module.css';

const ProductList = () => (
    <section className={styles.product__section}>
        <SearchBar />
        <div className={styles.container}>
            <ul className={styles.product__list}>
                {data.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    </section>
);

export default ProductList;
