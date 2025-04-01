import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './create-equipo.dto';
import { Post } from '@nestjs/common';
import { get } from 'http';

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {}

