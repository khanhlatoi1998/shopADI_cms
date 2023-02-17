export interface ProductType {
    _id?: string;
    image: string;
    subImage: Array<string>;
    name: string;
    category: string;
    color_group?: Array<any>;
    size_group?: Array<any>;
    color?: string;
    size?: string;
    slug: string;
    price: number | string;
    oldPrice: number | string;
    quantity: number;
    rating?: number | string;
    type?: string;
    like: number;
    view: number;
    share: number;
    comment?: Array<any>;
    description?: string;
}