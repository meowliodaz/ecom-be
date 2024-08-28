import {
	Body,
	Controller, Delete, Get, Param, Patch, Post,
	Query,
	ParseIntPipe,
	ValidationPipe
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {

	constructor(private readonly productsService: ProductsService) {}

	/*
	REMEMBER: Route order is important
	GET		/products
	POST	/products
	GET		/products/old_products	Static route => Has to be writen before dynamic route, otherwise it will go into the :id route instead
	GET		/products/:id			| These are dynamics route.
	PATCH	/products/:id			| Any string after "/products" will be accepted (if they use the same request type "GET", "POST", etc.),
	DELETE	/products/:id			| and static route written below won't work
	*/

	@Get()		// GET /products
	findManyProducts(@Query("format") format?: "pdf" | "epub") {
		const products = this.productsService.findManyProducts(format);

		return products;
	}
	
	@Get(":id")	//Get products/:id
	findProduct(@Param("id", ParseIntPipe) id: number) {
		const product = this.productsService.findProduct(id);

		return product;
	}
	
	@Post("")	//POST products
	createProduct(
		@Body(ValidationPipe) product: CreateProductDto
	) {

		return this.productsService.createProduct(product);
	}

	@Patch("id")	//PATCH products/:id
	updateProduct(
		@Param("id", ParseIntPipe) id: number,
		@Body(ValidationPipe) productUpdate: UpdateProductDto
	) {

		return this.productsService.updateProduct(id, productUpdate);
	}
	
	@Delete(":id")	//Get products/:id
	deleteProduct(@Param("id", ParseIntPipe) id: number) {

		return this.productsService.deleteProduct(id);
	}
}
