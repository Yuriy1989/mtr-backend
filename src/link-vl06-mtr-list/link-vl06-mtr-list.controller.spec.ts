import { Test, TestingModule } from '@nestjs/testing';
import { LinkVl06MtrListController } from './link-vl06-mtr-list.controller';
import { LinkVl06MtrListService } from './link-vl06-mtr-list.service';

describe('LinkVl06MtrListController', () => {
  let controller: LinkVl06MtrListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkVl06MtrListController],
      providers: [LinkVl06MtrListService],
    }).compile();

    controller = module.get<LinkVl06MtrListController>(LinkVl06MtrListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
