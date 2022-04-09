import { BadRequestException, Body, Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { CepService } from './cep.service';
import { CreateCepDto } from './dto/create-cep.dto';
import { RequestCepDto } from './dto/request-cep.dto';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get()
  async getCep(@Body() requestCep: RequestCepDto){
    if (!this.cepService.isCEPValid(requestCep)) {
      throw new BadRequestException('Invalid CEP');
    }

    const cepFormated = this.cepService.cleanCep(requestCep);
    const isThereCepInsideDb = await this.cepService.findLocalByCepDb(cepFormated);
    if(isThereCepInsideDb) {
      return isThereCepInsideDb;
    }
    const cepResponse = await axios.get(`https://viacep.com.br/ws/${cepFormated}/json/`)
    const cepData = await cepResponse.data
    if(cepData.error) {
      throw new BadRequestException('CEP not found');
    }

    const newCep = new CreateCepDto(cepData);

    return await this.cepService.registerNewLocal(newCep);
  }
}
