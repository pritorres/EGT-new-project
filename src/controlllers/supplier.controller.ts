import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { Supplier } from 'src/entities/supplier.entity';
import { SupplierService } from '../services/supplier.service';
import { CreateSupplierDto, UpdateSupplierDto } from '../dto/supplier.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  async getAllSupplier(): Promise<Supplier[]> {
    return await this.supplierService.getAllSupplier();
  }

  @Get(':id')
  async getOneSupplier(@Param('id') id: number): Promise<Supplier> {
    const index = await this.supplierService.getOneSupplier(id);
    if (!index) {
      throw new NotFoundException(`supplier ${id} not found`);
    }

    return index;
  }

  @Post()
  async createSupplier(@Body() body: CreateSupplierDto): Promise<Supplier> {
    return await this.supplierService.createSupplier(body);
  }
  @Put(':id')
  async upDateSupplier(
    @Param('id') id: number,
    @Body() body: UpdateSupplierDto,
  ): Promise<Supplier> {
    return await this.supplierService.upDateSupplier(id, body);
  }

  @Delete(':id')
  async deleteSupplier(@Param('id') id: number): Promise<void> {
    return await this.supplierService.deleteSupplier(id);
  }
}
