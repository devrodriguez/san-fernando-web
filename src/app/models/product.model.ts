export class Product {
    id: number;
    name: string;
    code: string;
    description: string;
    price: number;
    img_url: string;
    image: File;

    constructor(id: number, name: string, code: string, description: string, price: number, img_url: string) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.price = price;
        this.img_url = img_url;
    }
}