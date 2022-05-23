export interface Categories {
    data: Category[];
    meta?: Meta;
}
export interface Attributes {
    name: string;
    slug: string;
    description?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    id: number;
    attributes: Attributes;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface Meta {
    pagination: Pagination;
}





