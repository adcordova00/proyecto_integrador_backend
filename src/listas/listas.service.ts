import { Injectable } from '@nestjs/common';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';

@Injectable()
export class ListasService {
  create(createListaDto: CreateListaDto) {
    return 'This action adds a new lista';
  }

  findAll() {
    return `This action returns all listas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lista`;
  }

  update(id: number, updateListaDto: UpdateListaDto) {
    return `This action updates a #${id} lista`;
  }

  remove(id: number) {
    return `This action removes a #${id} lista`;
  }
}
