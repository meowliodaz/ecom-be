import {
	Body,
	Controller, Delete, Get, Param, Patch, Post
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
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
	findManyProducts() {

		return [];
	}
	
	@Get(":id")	//Get products/:id
	findProduct(@Param("id") id:string) {

		return {};
	}
	
	@Post("")	//POST products
	createProduct(@Body() product: {}) {

		return {};
	}

	@Patch("id")	//PATCH products/:id
	updateProduct(@Param("id") id: string, @Body() productUpdate: {}) {

		return productUpdate;
	}
	
	@Delete(":id")	//Get products/:id
	deleteProduct(@Param("id") id:string) {

		return {};
	}
}
