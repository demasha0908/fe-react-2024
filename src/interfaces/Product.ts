import type { Category } from './Category';

export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    images: [string];
    creationAt: string;
    updatedAt: string;
    category: Category;
}
