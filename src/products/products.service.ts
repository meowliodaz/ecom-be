import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
	private products = [];

	findManyProducts(format?: "pdf" | "epub") {
		if (format) {
			const formatArray = this.products.filter(
				product => product.format === format
			);

			if (formatArray.length <= 0) throw new NotFoundException("Format not found!")
			return formatArray
		}

		return this.products
	}

	findProduct(id: number) {
		const product = this.products.find(product => product.id === id);
		if (!product) throw new NotFoundException("Product not found")

		return product;
	}

	createProduct(
		product: CreateProductDto
	) {
		const productsByIdDesc = [...this.products].sort((a, b) => b.id = a.id);

		const newProduct = {
			id: productsByIdDesc[0].id + 1,
			...product
		}
		this.products.push(newProduct);

		return newProduct;
	}

	updateProduct(
		id: number,
		updatedProduct: UpdateProductDto
	) {
		const product = this.products.find(product => product.id === id);
		if (!product) throw new NotFoundException("Product not found")

		this.products = this.products.map(product => {
			if (product.id === id) {
				return {
					...product,
					...updatedProduct
				};
			}
			return product;
		})

		return this.findProduct(id);
	}

	deleteProduct(id: number) {
		const deletedProduct = this.findProduct(id);

		this.products = this.products.filter(product => product.id != id);

		return deletedProduct;
	}
}
