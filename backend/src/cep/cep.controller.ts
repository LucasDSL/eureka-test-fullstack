import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CepService } from './cep.service';
import { CreateCepDto } from './dto/create-cep.dto';
import { RequestCepDto } from './dto/request-cep.dto';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get('/:cep')
  @HttpCode(HttpStatus.OK)
  async getPlace(@Param('cep') cep: string) {
    if (!this.cepService.isCEPValid(cep)) {
      throw new BadRequestException('Invalid CEP');
    }

    const cepFormated = this.cepService.cleanCep(cep);
    const isThereCepInsideDb = await this.cepService.findLocalByCepDb(
      cepFormated,
    );
    if (isThereCepInsideDb) {
      return isThereCepInsideDb;
    }

    const cepData = await this.cepService.getDataFromViaCep(cepFormated);
    if (cepData.erro) {
      throw new BadRequestException('CEP not found');
    }

    const newCep = new CreateCepDto(cepData);

    return await this.cepService.registerNewLocal(newCep);
  }

  @Get('all')
  findAllCeps() {
    return this.cepService.findAll();
  }
}
