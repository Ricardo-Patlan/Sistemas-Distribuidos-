import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJuegoDto } from './dto/create-juego.dto.js';
import { UpdateJuegoDto } from './dto/update-juego.dto.js';
import { Juego } from './entities/juego.entity.js';
import { v4 as Uuidv4 } from 'uuid';

@Injectable()
export class JuegosService {
  // Arreglo donde se guardan los juegos en memoria
  private juegos: Juego[] = [];

  // Crea un juego con un id UUID y lo agrega al arreglo
  create(createJuegoDto: CreateJuegoDto) {
    const { title, genre, platform, price, description } = createJuegoDto;
    const newJuego = new Juego(Uuidv4(), title, genre, platform, price, description);
    this.juegos.push(newJuego);
    return newJuego;
  }

  // Regresa todos los juegos
  findAll() {
    return this.juegos;
  }

  // Busca un juego por id, si no existe manda error 404
  findOne(id: string) {
    const juego = this.juegos.find((juego) => juego.id == id);
    if (!juego) {
      throw new NotFoundException(`Juego with ${id} not found`);
    }
    return juego;
  }

  // Busca el juego y le actualiza solo los campos que llegaron
  update(id: string, updateJuegoDto: UpdateJuegoDto) {
    const { title, genre, platform, price, description } = updateJuegoDto;
    const juego = this.findOne(id);
    juego.updateWith({ title, genre, platform, price, description });
    return juego;
  }

  // Quita el juego del arreglo y regresa un mensaje
  remove(id: string) {
    const juego = this.findOne(id);
    this.juegos = this.juegos.filter((juego) => juego.id != id);
    return {
      status: 200,
      msg: 'Juego eliminado con exito',
      juego: juego,
    };
  }
}