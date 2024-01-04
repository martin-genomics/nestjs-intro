import { Injectable } from "@nestjs/common";
import uuid from 'uuid'
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const newProduct = new Product(uuid.v4(), title, desc, price);
        this.products.push(newProduct);
    }
}