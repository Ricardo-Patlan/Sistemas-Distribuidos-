import { Module } from '@nestjs/common';
import { JuegosService } from './juegos.service.js';
import { JuegosController } from './juegos.controller.js';

@Module({
  controllers: [JuegosController],
  providers: [JuegosService],
})
export class JuegosModule {}
