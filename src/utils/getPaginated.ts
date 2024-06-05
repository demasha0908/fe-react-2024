import type { Product } from '@/interfaces/Product.ts';

export const getPaginatedProducts = (data: Product[], currentPage: number): Product[] => data.slice((currentPage - 1) * 8, currentPage * 8);
