import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePointCollecteDto } from './dto/createPointCollecte.dto';
import { UpdatePointCollecteDto } from './dto/updatePointCollecte.dto';

@Injectable()
export class PointCollecteService {
    constructor(private readonly prismaService : PrismaService) {}

    async getAll() {
        return this.prismaService.pointCollecte.findMany()
    }

    async getOne(pointCollecteId: number) {
        const pointCollecte = await this.prismaService.pointCollecte.findUnique({where: {id: pointCollecteId}});
        if(!pointCollecte) throw new NotFoundException('Post not found');
        return pointCollecte;

        
    }
    async create(createPointCollecteDto: CreatePointCollecteDto) {
        const { name, localiteId} = createPointCollecteDto;
        await this.prismaService.pointCollecte.create({data : {name, localiteId}});
        return {data : "PointCollecte created"};
    }

    async update(pointCollecteId: number, updatePointCollecteDto: UpdatePointCollecteDto) {
        const pointCollecte = await this.prismaService.pointCollecte.findUnique({where: {id: pointCollecteId}});
        if(!pointCollecte) throw new NotFoundException('PointCollecte not found');
        await this.prismaService.pointCollecte.update({where: {id: pointCollecteId}, data : {...updatePointCollecteDto}});
        return {data : "PointCollecte updeted!"};
    }

    async delete(pointCollecteId: number) {
        const pointCollecte = await this.prismaService.pointCollecte.findUnique({where: {id: pointCollecteId}});
        if(!pointCollecte) throw new NotFoundException('Post not found');
        await this.prismaService.pointCollecte.delete({where: {id: pointCollecteId}});
        return {data : "PointCollecte deleted"};
    }
}
