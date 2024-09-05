import { IsMongoId, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateSponsorshipAdDto {
  @IsMongoId()
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
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsString()
  image?: string;
}

export class DeleteSponsorshipAdDto {
  @IsMongoId()
  @IsNotEmpty()
  id!: string;
}

export const sponsorshipAdSwaggerSchema = {
  CreateSponsorshipAdDto: {
    type: 'object',
    properties: {
      user: {
        type: 'string',
        description: 'User ID of the creator',
      },
      title: {
        type: 'string',
        description: 'Title of the sponsorship ad',
      },
      description: {
        type: 'string',
        description: 'Description of the sponsorship ad',
      },
      category: {
        type: 'string',
        description: 'Category of the sponsorship ad',
      },
      amount: {
        type: 'number',
        description: 'Amount to be paid for the sponsorship ad',
      },
      quantity: {
        type: 'number',
        description: 'Quantity of the sponsorship ad available',
      },
      image: {
        type: 'string',
        description: 'Image URL for the sponsorship ad',
      },
    },
    required: ['user', 'title', 'description', 'category', 'amount', 'quantity', 'image'],
  },
  SponsorshipAd: {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        description: 'ID of the sponsorship ad',
      },
      user: {
        type: 'string',
        description: 'User ID of the creator',
      },
      title: {
        type: 'string',
        description: 'Title of the sponsorship ad',
      },
      description: {
        type: 'string',
        description: 'Description of the sponsorship ad',
      },
      category: {
        type: 'string',
        description: 'Category of the sponsorship ad',
      },
      amount: {
        type: 'number',
        description: 'Amount to be paid for the sponsorship ad',
      },
      quantity: {
        type: 'number',
        description: 'Quantity of the sponsorship ad available',
      },
      image: {
        type: 'string',
        description: 'Image URL for the sponsorship ad',
      },
    },
  },
};
