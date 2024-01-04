import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./products.service";


@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    addProduct(@Body('title') title: string, @Body('desc') desc: string, @Body('price') price: number): { success: boolean, message: string} {
        this.productService.insertProduct(title, desc, price)
        return 
    }
}