import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsDecimal, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	author: string;
	
	@IsString()
	publisher: string;
	
	@IsString()
	description: string;

	@IsNotEmpty()
	@IsEnum(["pdf", "epub"], {
		message: "Invalid role! Please insert only \"pdf\" or \"epub\"."
	})
	format: "pdf" | "epub";
	
	@IsNotEmpty()
	@IsDecimal()
	price: number;
	
	@IsDecimal()
	salePrice: number;
	
	@IsNotEmpty()
	@IsInt()
	stocks: number;
	
	@IsString()
	image: string;
	
	@IsDate()
	created_at: Date;

	@IsDate()
	updated_at: Date;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
