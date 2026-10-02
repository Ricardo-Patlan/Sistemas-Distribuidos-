import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// Datos que se piden para crear un juego
export class CreateJuegoDto {
  @IsString()
  title!: string;

  @IsString()
  genre!: string;

  @IsString()
  platform!: string;

  // Se convierte a numero antes de validarlo
  @IsNumber()
  @Type(() => Number)
  price!: number;

  // La descripcion no es obligatoria
  @IsString()
  @IsOptional()
  description?: string;
}
