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

    export interface Formats {
        small: Small;
        thumbnail: Thumbnail;
    }

    export interface ImageAttributes {
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

    export interface ImageData {
        id: number;
        attributes: ImageAttributes;
    }

    export interface Image {
        data: ImageData;
    }

    export interface Attributes {
        title: string;
        slug: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image: Image;
        cover: Image;
        blocks: Block[];
    }

    export interface Project {
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

    export interface Projects {
        data: Project[];
        meta?: Meta;
    }

    export interface Block {
        id: number;
        __component: string;
        body: string;
        files: Files;
        buttons: Button[];
    }
    export interface Files {
        data: DataFiles[];
    }
    export interface DataFiles {
        id: number;
        attributes: AttributesFiles;
    }
    export interface AttributesFiles {
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
    export interface Button {
        id: number;
        title: string;
    }