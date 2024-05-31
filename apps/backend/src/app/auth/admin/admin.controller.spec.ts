import { Test, TestingModule } from '@nestjs/testing';
import { ClassController } from './admin.controller';
import { ClassService } from './admin.service';

describe('ClassController', () => {
  let controller: ClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassController],
      providers: [ClassService],
    }).compile();

    controller = module.get<ClassController>(ClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
