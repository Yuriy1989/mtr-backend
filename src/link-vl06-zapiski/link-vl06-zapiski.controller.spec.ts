import { Test, TestingModule } from '@nestjs/testing';
import { LinkVl06ZapiskiController } from './link-vl06-zapiski.controller';
import { LinkVl06ZapiskiService } from './link-vl06-zapiski.service';

describe('LinkVl06ZapiskiController', () => {
  let controller: LinkVl06ZapiskiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkVl06ZapiskiController],
      providers: [LinkVl06ZapiskiService],
    }).compile();

    controller = module.get<LinkVl06ZapiskiController>(LinkVl06ZapiskiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
