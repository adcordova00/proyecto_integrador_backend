import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EquiposModule } from './equipos/equipos.module';
import { TablerosModule } from './tableros/tableros.module';
import { ListasModule } from './listas/listas.module';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [UsersModule, EquiposModule, TablerosModule, ListasModule, TareasModule]
})
export class AppModule {}
