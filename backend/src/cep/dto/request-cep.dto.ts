import { IsString } from "class-validator";

export class RequestCepDto {
    @IsString()
    cep: string;
}