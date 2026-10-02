import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { JuegosService } from './juegos.service.js';
import { CreateJuegoDto } from './dto/create-juego.dto.js';
import { UpdateJuegoDto } from './dto/update-juego.dto.js';

// Todas las rutas empiezan con /juegos
@Controller('juegos')
export class JuegosController {
  constructor(private readonly juegosService: JuegosService) {}

  //  crea un juego
  @Post()
  create(@Body() createJuegoDto: CreateJuegoDto) {
    return this.juegosService.create(createJuegoDto);
  }

  @Get()
  findAll() {
    return this.juegosService.findAll();
  }

  // busca un juego, valida que el id sea UUID
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.juegosService.findOne(id);
  }

  //  recuerda patch siempre es para actualizar en este caso un juego
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateJuegoDto: UpdateJuegoDto,
  ) {
    return this.juegosService.update(id, updateJuegoDto);
  }

  // Delimina un juego
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.juegosService.remove(id);
  }
}
