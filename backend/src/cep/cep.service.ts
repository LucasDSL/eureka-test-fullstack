import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { CreateCepDto } from './dto/create-cep.dto';
import { RequestCepDto } from './dto/request-cep.dto';
import { Local } from './entities/local.entity';

@Injectable()
export class CepService {
    constructor(@InjectRepository(Local) private readonly LocalRepo: Repository<Local>){}

    findLocalByCepDb(cep: string) {
        return this.LocalRepo.findOne({cep});
    }

    isCEPValid(requestCepDto: RequestCepDto) {
        const onlyNumbersCep = this.cleanCep(requestCepDto);
        return onlyNumbersCep.length === 8 ? true : false;
    }

    cleanCep(requestCepDto: RequestCepDto) {
        return requestCepDto.cep.replace(/\D/g, "");
    }

    registerNewLocal(createCepDto: CreateCepDto) {
        const LocalModel = this.LocalRepo.create(createCepDto);
        return this.LocalRepo.save(LocalModel);
    }
}
