

    export interface Thumbnail {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: any;
        size: number;
        width: number;
        height: number;
    }

    export interface Small {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: any;
        size: number;
        width: number;
        height: number;
    }

    export interface Large {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: any;
        size: number;
        width: number;
        height: number;
    }

    export interface Medium {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: any;
        size: number;
        width: number;
        height: number;
    }

    export interface Formats {
        thumbnail: Thumbnail;
        small: Small;
        large: Large;
        medium: Medium;
    }

    export interface AttributesImage {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: Formats;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: any;
        provider: string;
        provider_metadata?: any;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface DataImage {
        id: number;
        attributes: AttributesImage;
    }

    export interface Image {
        data: DataImage;
    }

    export interface Attributes {
        title: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        description: string;
        slug: string;
        flag: number;
        image: Image;
    }

    export interface Service {
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

    export interface Services {
        data: Service[];
        meta?: Meta;
    }

