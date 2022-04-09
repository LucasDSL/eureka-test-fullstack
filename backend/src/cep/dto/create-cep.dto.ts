export class CreateCepDto {
  cep: string;
  patio: string;
  city: string;
  stateAcronym: string;
  neighborhood: string;
  visited = 1;

  constructor(viaCepObject) {
    this.cep = viaCepObject.cep.replace('-', '');
    this.patio = viaCepObject.logradouro;
    this.city = viaCepObject.localidade;
    this.stateAcronym = viaCepObject.uf;
    this.neighborhood = viaCepObject.bairro;
  }
}
