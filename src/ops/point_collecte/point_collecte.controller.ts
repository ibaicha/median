import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { PointCollecteService } from './point_collecte.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatePointCollecteDto } from './dto/createPointCollecte.dto';
import { UpdatePointCollecteDto } from './dto/updatePointCollecte.dto';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('PointCollecte')
@Controller('pointCollectes')
export class PointCollecteController {
    constructor(private readonly pointCollecteService: PointCollecteService) {}

    @Get()
    getAll() {
        return this.pointCollecteService.getAll();
    }

    @Get("/:id")
    get(@Param("id", ParseIntPipe) pointCollecteId : number, createPointCollecteDto: CreatePointCollecteDto) {
        return this.pointCollecteService.getOne(pointCollecteId); 
    }
   

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post("create")
    create(@Body() createPointCollecteDto: CreatePointCollecteDto) {
        return this.pointCollecteService.create(createPointCollecteDto);
        
    }


    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete("delete/:id")
    delete(@Param("id", ParseIntPipe) pointCollecteId : number, createPointCollecteDto: CreatePointCollecteDto, @Req() request : Request) {
        return this.pointCollecteService.delete(pointCollecteId); 
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put("update/:id")
    update(
        @Param("id", ParseIntPipe) pointCollecteId : number,
        @Body() updatePointCollecteDto: UpdatePointCollecteDto,
        ) {
        return this.pointCollecteService.update(pointCollecteId, updatePointCollecteDto); 
    }
   
    
    
}
