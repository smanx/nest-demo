/*
  create-bbk.dto.ts
*/

export class CreateBbkDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly limit: number;

  constructor(){
    this.age = Math.random()
  }
}

export class UpdateBbkDto {
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
