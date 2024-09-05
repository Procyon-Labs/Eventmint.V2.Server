import { IsMongoId } from 'class-validator';

export class UniqueIdDTO {
  @IsMongoId()
  id!: string;
}
