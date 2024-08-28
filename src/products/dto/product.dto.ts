import { PartialType } from "@nestjs/mapped-types";

export class CreateProductDto {
	name: string;
	author: string;
	publisher: string;
	description: string;
	category: string;
	format: "pdf" | "epub";
	price: number;
	salePrice: number;
	stocks: number;
	image: string;
	created_at: Date;
	updated_at: Date;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
