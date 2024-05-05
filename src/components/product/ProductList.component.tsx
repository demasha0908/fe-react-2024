import React from 'react';

import data from '@/data/products.json';
import type { Product } from '@/interfaces/Product';

import ProductCard from './ProductCard.component';

import styles from './Product.module.css';

const ProductList = () => (
    <ul className={styles.product__list}>
        {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </ul>
);

export default ProductList;
