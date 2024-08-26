import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(1, 64)
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(1, 256)
  @IsOptional()
  description: string;
}

export class PatchTaskDto {
  @IsString()
  @Length(1, 64)
  @IsOptional()
  name: string;

  @IsString()
  @Length(1, 256)
  @IsOptional()
  description: string;
}

export class DoTaskDto {
  @IsBoolean()
  @IsNotEmpty()
  done: boolean;
}
