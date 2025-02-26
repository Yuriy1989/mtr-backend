import { Test, TestingModule } from '@nestjs/testing';
import { LinkVl06MtrListService } from './link-vl06-mtr-list.service';

describe('LinkVl06MtrListService', () => {
  let service: LinkVl06MtrListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkVl06MtrListService],
    }).compile();

    service = module.get<LinkVl06MtrListService>(LinkVl06MtrListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
