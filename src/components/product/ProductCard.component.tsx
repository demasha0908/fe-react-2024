import React, { useContext } from 'react';

import { ErrorMessage } from '@/components/messages/Error.component';
import { LoadingMessage } from '@/components/messages/Loading.component';
import { NoFoundMessage } from '@/components/messages/NoFound.component';
import type { Product } from '@/interfaces/Product';
import { ProductsDataContext } from '@/utils/Products';

import styles from './Product.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { isError, isLoading } = useContext(ProductsDataContext);

    if (isLoading) {
        return <LoadingMessage />;
    }

    if (isError || !product) {
        return <NoFoundMessage />;
    }

    if (isError) {
        return <ErrorMessage />;
    }

    return (
        <li key={product.id} className={styles.product__card}>
            <div className={styles.product__container}>
                <img className={styles.card__img} src={product.images[0]} alt={product.title} width="201px" height="205px" />
                <h3 className={styles.card__title}>{product.title}</h3>
                <div className={styles.card__price}>
                    <div className={styles.card__pricevalue}>
                        {product.price}
                        <span className={styles.card__pricesign}> ₴</span>
                    </div>
                    <button className={styles.card__button}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1704 17.8227C16.0658 17.8227 15.1704 18.7759 15.1704 19.9517C15.1704 21.1275 16.0658 22.0807 17.1704 22.0807C18.275 22.0807 19.1704 21.1275 19.1704 19.9517C19.1704 18.7759 18.275 17.8227 17.1704 17.8227ZM17.1704 17.8227H9.46436C9.00329 17.8227 8.77234 17.8227 8.58252 17.7353C8.41507 17.6583 8.26979 17.5343 8.16395 17.3761C8.04531 17.1989 7.9976 16.9618 7.90315 16.4926L5.44189 4.26567C5.34525 3.78556 5.29628 3.54577 5.17627 3.36645C5.07043 3.20829 4.92518 3.08381 4.75773 3.00678C4.56787 2.91943 4.3382 2.91943 3.87694 2.91943H3.17041M6.17041 6.11298H19.0436C19.7654 6.11298 20.1259 6.11298 20.3682 6.27304C20.5804 6.41324 20.7357 6.63313 20.8035 6.88902C20.8808 7.18115 20.7814 7.55004 20.5814 8.28828L19.1968 13.398C19.0772 13.8393 19.0173 14.0596 18.896 14.2234C18.7889 14.368 18.6476 14.4811 18.4875 14.5506C18.3065 14.6291 18.0915 14.6291 17.6625 14.6291H7.90088M8.17041 22.0807C7.06584 22.0807 6.17041 21.1275 6.17041 19.9517C6.17041 18.7759 7.06584 17.8227 8.17041 17.8227C9.27498 17.8227 10.1704 18.7759 10.1704 19.9517C10.1704 21.1275 9.27498 22.0807 8.17041 22.0807Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
