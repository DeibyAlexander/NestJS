import { Test, TestingModule } from '@nestjs/testing';
import { ParachutesController } from './parachutes.controller';
import { ParachutesService } from './parachutes.service';

describe('ParachutesController', () => {
  let controller: ParachutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParachutesController],
      providers: [ParachutesService],
    }).compile();

    controller = module.get<ParachutesController>(ParachutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
