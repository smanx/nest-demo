import { Test, TestingModule } from '@nestjs/testing';
import { BbksController } from './bbks.controller';

describe('BbksController', () => {
  let controller: BbksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BbksController],
    }).compile();

    controller = module.get<BbksController>(BbksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
