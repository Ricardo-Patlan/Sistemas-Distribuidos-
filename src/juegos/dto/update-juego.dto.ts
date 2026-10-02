import { PartialType } from '@nestjs/mapped-types';
import { CreateJuegoDto } from './create-juego.dto.js';
import { IsOptional, IsString, IsUUID } from 'class-validator';

// Usa los mismos campos de crear pero todos opcionales y usamos ? por que puede o no ver id 
export class UpdateJuegoDto extends PartialType(CreateJuegoDto) {
  @IsString()
  @IsOptional()
  @IsUUID()
  id?: string;
}
