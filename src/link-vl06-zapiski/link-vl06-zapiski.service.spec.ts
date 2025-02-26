import { Test, TestingModule } from '@nestjs/testing';
import { LinkVl06ZapiskiService } from './link-vl06-zapiski.service';

describe('LinkVl06ZapiskiService', () => {
  let service: LinkVl06ZapiskiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkVl06ZapiskiService],
    }).compile();

    service = module.get<LinkVl06ZapiskiService>(LinkVl06ZapiskiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
