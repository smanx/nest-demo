/*
  create-bbk.dto.ts
*/

export class CreateBbkDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly limit: number;
  readonly type: number;
  readonly creatAt: Date;
  constructor(){
    this.creatAt = new Date()
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
