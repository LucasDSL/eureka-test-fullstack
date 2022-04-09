import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestCepDto } from './dto/request-cep.dto';
import { Local } from './entities/local.entity';

@Injectable()
export class CepService {
    constructor(@InjectRepository(Local) private readonly LocalRepo: Repository<Local>){}

    findLocalByCepDb(requestCepDto: RequestCepDto) {
        const onlyNumbersCep = this.cleanCep(requestCepDto)
        return this.LocalRepo.findOne({cep: onlyNumbersCep})
    }

    cleanCep(requestCepDto: RequestCepDto) {
        const onlyNumbersInsideString = requestCepDto.cep.replace(/\D/g, "")
        return onlyNumbersInsideString
    }
}
