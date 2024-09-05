import { ConvertToInt } from '../utils/decorator';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateSponsorshipAdDto {
  // @IsMongoId()
  @IsString()
  @IsNotEmpty()
  user!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber()
  @IsNotEmpty()
  amount!: number;

  @IsNumber()
  @IsNotEmpty()
  quantity!: number;

  @IsString()
  @IsNotEmpty()
  image!: string;
}

export class UpdateSponsorshipAdDto {
  //   @IsMongoId()
  //   @IsOptional()
  //   user!: string;

  @IsString()
  @IsOptional()
  title!: string;

  @IsString()
  @IsOptional()
  description!: string;

  @IsString()
  @IsOptional()
  category!: string;

  @IsNumber()
  @IsOptional()
  amount!: number;

  @IsNumber()
  @IsOptional()
  quantity!: number;

  @IsString()
  @IsOptional()
  image!: string;
}

export class GetSponsorshipAdDto {
  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @ConvertToInt()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @ConvertToInt()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsString()
  image?: string;
}

export class GetSponsorshipAdWithPaginationDto {
  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @ConvertToInt() // Because by default any value passed through query is a string, we need to convert it back to a number.
  @IsNumber()
  amount?: number;

  @IsOptional()
  @ConvertToInt() // Because by default any value passed through query is a string, we need to convert it back to a number.
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsString()
  image?: string;

  @ConvertToInt() // Because by default any value passed through query is a string, we need to convert it back to a number.
  @IsNumber()
  @IsPositive()
  @Min(1)
  pagination_size: number = 10;

  @ConvertToInt()
  @IsNumber()
  @IsPositive()
  @Min(1)
  pagination_page: number = 1;
}

export class DeleteSponsorshipAdDto {
  @IsMongoId()
  @IsNotEmpty()
  id!: string;
}
