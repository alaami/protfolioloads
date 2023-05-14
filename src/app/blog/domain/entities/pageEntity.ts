export interface AttributesImage {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: any;
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
export interface SectionHeader {
  id: number;
  title: string;
}
export interface Action {
  id: number;
  title: string;
}
export interface Servicecard {
  id: number;
  title: string;
  description: string;
  image: Image;
}

export interface Block {
    id: number;
    __component: string;
    title: string;
    body: string;
    servicecard?: Servicecard[];
    action: Action[];
    sectionHeader: SectionHeader[];
}

export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  preventIndexing: boolean;
}

export interface Attributes {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    blocks: Block[];
    cover: Cover;
    locale:string,
    slug: string;
    seo:Seo;
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
export interface Data {
    id: number;
    attributes: Attributes;
}

/*export interface Meta {
}*/

export interface Page {
    data: Data[];
    //meta?: Meta;
}