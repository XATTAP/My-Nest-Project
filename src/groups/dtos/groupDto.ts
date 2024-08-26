import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @Length(1, 64)
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(1, 256)
  @IsOptional()
  description: string;
}

export class PatchGroupDto {
  @IsString()
  @Length(1, 64)
  @IsOptional()
  name: string;

  @IsString()
  @Length(1, 256)
  @IsOptional()
  description: string;
}
