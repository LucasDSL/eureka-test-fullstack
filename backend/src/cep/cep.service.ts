import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import { CreateCepDto } from './dto/create-cep.dto';
import { Local } from './entities/local.entity';

@Injectable()
export class CepService {
  constructor(
    @InjectRepository(Local) private readonly LocalRepo: Repository<Local>,
  ) {}

  findLocalByCepDb(cep: string) {
    return this.LocalRepo.findOne({ cep });
  }

  isCEPValid(cep: string) {
    const onlyNumbersCep = this.cleanCep(cep);
    return onlyNumbersCep.length === 8;
  }

  cleanCep(cep: string) {
    return cep.replace(/\D/g, '');
  }

  registerNewLocal(createCepDto: CreateCepDto) {
    const LocalModel = this.LocalRepo.create(createCepDto);
    return this.LocalRepo.save(LocalModel);
  }

  async getDataFromViaCep(cep: string) {
    const viaCepResponse = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`,
    );
    return viaCepResponse.data;
  }

  findAll() {
    return this.LocalRepo.find({ take: 10, skip: 0 });
  }
}
