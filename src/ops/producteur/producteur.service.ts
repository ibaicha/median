import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProducteurDto } from './dto/createProducteur.dto';
import { UpdateProducteurDto } from './dto/updateProducteur.dto';

@Injectable()
export class ProducteurService {
    constructor(private readonly prismaService : PrismaService) {}

    async getAll() {
        return this.prismaService.producteur.findMany()
    }

    async getOne(producteurId: number) {
        const producteur = await this.prismaService.producteur.findUnique({where: {id: producteurId}});
        if(!producteur) throw new NotFoundException('Post not found');
        return producteur;

        
    }
    async create(createProducteurDto: CreateProducteurDto) {
        const { compte,prenom,nom, cni, email, telephone, adresse, isActive, opId} = createProducteurDto;
        await this.prismaService.producteur.create({data : {compte, prenom,nom, cni, email, telephone, adresse, isActive, opId}});
        return {data : "Producteur created"};
    }

    async update(producteurId: number, updateProducteurDto: UpdateProducteurDto) {
        const producteur = await this.prismaService.producteur.findUnique({where: {id: producteurId}});
        if(!producteur) throw new NotFoundException('Producteur not found');
        await this.prismaService.producteur.update({where: {id: producteurId}, data : {...updateProducteurDto}});
        return {data : "Producteur updeted!"};
    }

    async delete(producteurId: number) {
        const producteur = await this.prismaService.producteur.findUnique({where: {id: producteurId}});
        if(!producteur) throw new NotFoundException('Post not found');
        await this.prismaService.producteur.delete({where: {id: producteurId}});
        return {data : "Producteur deleted"};
    }
}
