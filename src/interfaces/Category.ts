export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface FiltersButtons {
    name: string;
    categoryId: number;
}

export interface SearchProps {
    setFilter: (filter: string) => void;
    setSort: (sort: string) => void;
    setSearchQuery: (query: string) => void;
}
