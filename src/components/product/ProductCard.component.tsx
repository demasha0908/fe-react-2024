import cart from '@/assets/cartblack.svg';
import type { Product } from '@/interfaces/Product';

import styles from './Product.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
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
                    <img className={styles.card__cart} src={cart} alt="Cart" />
                </button>
            </div>
        </div>
    </li>
);

export default ProductCard;
