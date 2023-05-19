import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOpDto } from './dto/createOp.dto';
import { UpdateOpDto } from './dto/updateOp.dto';

@Injectable()
export class OpService {
    constructor(private readonly prismaService : PrismaService) {}

    async getAll() {
        return this.prismaService.op.findMany()
    }

    async getOne(opId: number) {
        const op = await this.prismaService.op.findUnique({where: {id: opId}});
        if(!op) throw new NotFoundException('Post not found');
        return op;
    }
    async create(createOpDto: CreateOpDto) {
        const { name,typeOpId,pointCollecteId} = createOpDto;
        await this.prismaService.op.create({data : { name, typeOpId,pointCollecteId}});
        return {data : "Op created"};
    }

    async update(opId: number, updateOpDto: UpdateOpDto) {
        const op = await this.prismaService.op.findUnique({where: {id: opId}});
        if(!op) throw new NotFoundException('Op not found');
        await this.prismaService.op.update({where: {id: opId}, data : {...updateOpDto}});
        return {data : "Op updeted!"};
    }

    async delete(opId: number) {
        const op = await this.prismaService.op.findUnique({where: {id: opId}});
        if(!op) throw new NotFoundException('Post not found');
        await this.prismaService.op.delete({where: {id: opId}});
        return {data : "Op deleted"};
    }
}
