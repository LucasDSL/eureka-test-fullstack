import { Module } from '@nestjs/common';
import { CepService } from './cep.service';
import { CepController } from './cep.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Local } from './entities/local.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Local])],
  controllers: [CepController],
  providers: [CepService]
})
export class CepModule {}
