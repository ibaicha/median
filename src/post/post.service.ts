import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PostService {
    constructor(private readonly prismaService : PrismaService) {}

    async getAll() {
        return this.prismaService.post.findMany();
    }

    async getOne(postId: number) {
        const post = await this.prismaService.post.findUnique({where: {id: postId}});
        if(!post) throw new NotFoundException('Post not found');
        //await this.prismaService.post.delete({where: {postId}});
        //return {data : "Post deleted"};
        return post;
    }
    async create(createPostDto: CreatePostDto, userId: any) {
        const { body, title} = createPostDto;
        await this.prismaService.post.create({data : { body, title, userId }});
        return {data : "Post created"};
    }
    async delete(postId: number, userId: number) {
        const post = await this.prismaService.post.findUnique({where: {id: postId}});
        if(!post) throw new NotFoundException('Post not found');
        if(post.userId !== userId) 
        throw new ForbiddenException('Forbidden action');
        await this.prismaService.post.delete({where: {id: postId}});
        return {data : "Post deleted"};
    }
    async update(postId: number, userId: any, updatePostDto: UpdatePostDto) {
        const post = await this.prismaService.post.findUnique({where: {id: postId}});
        if(!post) throw new NotFoundException('Post not found');
        if(post.userId !== userId) 
        throw new ForbiddenException('Forbidden action');
        await this.prismaService.post.update({where: {id: postId}, data : {...updatePostDto}});
        return {data : "Post updeted!"};
    }
}
