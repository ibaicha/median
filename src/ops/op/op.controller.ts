import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { OpService } from './op.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateOpDto } from './dto/createOp.dto';
import { UpdateOpDto } from './dto/updateOp.dto';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Op')
@Controller('ops')
export class OpController {
    constructor(private readonly opService: OpService) {}

    @Get()
    getAll() {
        return this.opService.getAll();
    }

    @Get("/:id")
    get(@Param("id", ParseIntPipe) opId : number, createOpDto: CreateOpDto) {
        return this.opService.getOne(opId); 
    }
   

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post("create")
    create(@Body() createOpDto: CreateOpDto) {
        return this.opService.create(createOpDto);
        
    }


    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete("delete/:id")
    delete(@Param("id", ParseIntPipe) opId : number, createOpDto: CreateOpDto, @Req() request : Request) {
        return this.opService.delete(opId); 
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put("update/:id")
    update(
        @Param("id", ParseIntPipe) opId : number,
        @Body() updateOpDto: UpdateOpDto,
        ) {
        return this.opService.update(opId, updateOpDto); 
    }
   
    
    
}
