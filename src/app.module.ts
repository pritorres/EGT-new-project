import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'priscilatorres',
      password: 'panconqueso1',
      database: 'prueba',
      entities: ['entities/*.ts'],
      // synchronize: true, // actualiza la db con las entidades del proyecto en cada start-up
      //  dropSchema: true, // elimina el schema en cada start-up
      autoLoadEntities: true, // carga las entidades en el startup
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
