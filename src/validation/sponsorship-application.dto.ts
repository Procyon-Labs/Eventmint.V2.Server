import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  IsMongoId,
  IsPositive,
  Min,
  IsNumber,
  IsUrl,
  IsEmail,
} from 'class-validator';
import { ConvertToInt } from '../utils/decorator';

export class CreateSponsorshipApplicationDto {
  @IsMongoId()
  @IsNotEmpty()
  sponsorshipAd!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsUrl()
  @IsNotEmpty()
  pitchDeck!: string;

  //   @IsBoolean()
  //   @IsOptional()
  //   verified?: boolean;
}

export class GetSponsorshipApplicationDto {
  @IsOptional()
  @IsMongoId()
  sponsorshipAd?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsUrl()
  pitchDeck?: string;

  @IsOptional()
  @IsString()
  verified?: boolean;
}

export class GetSponsorshipApplicationWithPaginationDto extends GetSponsorshipApplicationDto {
  @ConvertToInt() // Converts query string to number
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

export class UpdateSponsorshipApplicationDto {
  //   @IsOptional()
  //   @IsMongoId()
  //   sponsorshipAd?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsUrl()
  pitchDeck?: string;

  @IsOptional()
  @IsBoolean()
  verified?: boolean;
}
