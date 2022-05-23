export interface Block {
    id: number;
    __component: string;
    title: string;
    body: string;
}

export interface Attributes {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    blocks: Block[];
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Meta {
}

export interface Page {
    data: Data;
    meta?: Meta;
}