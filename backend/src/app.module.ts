import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepModule } from './cep/cep.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Local } from './cep/entities/local.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.CONN_HOST,
    username: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    entities: [Local],
    synchronize: true
  }), CepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
