    export interface Item {
        id: number;
        order: number;
        title: string;
        url: string;
        target?: any;
        createdAt: Date;
        updatedAt: Date;
        parent?: any;
    }

    export interface Menu {
        id: number;
        title: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        items: Item[];
    }

    export interface PrimaryMenu {
        menu: Menu;
    }