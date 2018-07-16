import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {EntrenadorController} from "./entrenador/entrenador.controller";
import {PokemonController} from "./pokemon/pokemon.controller";
import {EntrenadorService} from "./entrenador/entrenador.service";
import {PokemonService} from "./pokemon/pokemon.service";
import {AutorizacionController} from "./Autorizacion/Autorizacion.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PokemonEntity} from "./pokemon/pokemon.entity";
import {EntrenadorEntity} from "./entrenador/entrenador.entity";
import {UsuarioEntity} from "./Usuarios/usuario.entity";
import {UsuarioController} from "./Usuarios/usuario.controller";
import {UsuarioService} from "./Usuarios/usuario.service";

@Module({
  imports: [

      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'examen2',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true}),
      TypeOrmModule.forFeature([PokemonEntity,EntrenadorEntity,UsuarioEntity])

  ],
  controllers: [AppController,EntrenadorController,PokemonController,AutorizacionController,UsuarioController],
  providers: [AppService,EntrenadorService,PokemonService,UsuarioService],
})
export class AppModule {}
