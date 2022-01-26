import { Test, TestingModule } from '@nestjs/testing';
import { BrandProductService } from './brand-product.service';

describe('BrandProductService', () => {
  let service: BrandProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandProductService],
    }).compile();

    service = module.get<BrandProductService>(BrandProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
