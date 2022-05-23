export interface Articles {
  data: Array<Article> ;
  meta?: Meta;
}
export interface Article {
  id?: number;
  attributes: Attributes;
  }
  
export interface Attributes {
    title: string;
    description: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    cover: Cover;
    category: Category;
    blocks: Block[];
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
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface CoverAttributes {
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
export interface CoverData {
  id: number;
  attributes: CoverAttributes;
}
export interface Cover {
  data: CoverData;
}
export interface CategoryAttributes {
  name: string;
  slug: string;
  description?: any;
  createdAt: Date;
  updatedAt: Date;
}
export interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}
export interface Category {
  data: CategoryData;
}
export interface Block {
  id: number;
  __component: string;
  body: string;
  title: string;
}
export interface Meta {
  pagination: Pagination;
}
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

