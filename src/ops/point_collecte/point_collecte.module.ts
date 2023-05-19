import { Module } from '@nestjs/common';
import { PointCollecteController } from './point_collecte.controller';
import { PointCollecteService } from './point_collecte.service';

@Module({
  controllers: [PointCollecteController],
  providers: [PointCollecteService]
})
export class PointCollecteModule {}
