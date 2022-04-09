import { IsString, Length} from "class-validator";

export class RequestCepDto {
    @IsString()
    @Length(8, 10)
    cep: string;
}