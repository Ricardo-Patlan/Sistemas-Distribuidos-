import { Module } from '@nestjs/common';
import { ProductsModule } from '../products.module.js';
import { JuegosModule } from './juegos/juegos.module.js';

@Module({
  imports: [ProductsModule, JuegosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}