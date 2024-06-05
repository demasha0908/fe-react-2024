import styles from '@/components/product/Product.module.css';
import ProductCard from '@/components/product/ProductCard.component.tsx';
import type { Product } from '@/interfaces/Product.ts';

interface ProductProps {
    products: Product[];
}

export const ProductsComponent: React.FC<ProductProps> = ({ products }) => (
    <div className={styles.container}>
        <ul className={styles.product__list}>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    </div>
);
