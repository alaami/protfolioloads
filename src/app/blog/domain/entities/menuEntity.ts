export interface MenuElem {
    id: number;
    order: number;
    title: string;
    url: string;
    target?: any;
}

export interface Menu {
    id: number;
    __component: string;
    Menu: MenuElem[];
}
   export interface Attributes {
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        locale: string;
        title: string;
        menu: Menu[];
    }

    export interface MenuData {
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

    export interface Menus {
        data: MenuData[];
        meta?: Meta;
    }

    
    