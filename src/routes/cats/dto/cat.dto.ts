/*
  create-cat.dto.ts
*/

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly limit: number;

  constructor(){
    this.age = Math.random()
  }
}

export class UpdateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class ListAllEntities {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly limit: number;
}
