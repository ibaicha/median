import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailerModule } from './mailer/mailer.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { PaysModule } from './localites/pays/pays.module';
import { ZoneModule } from './localites/zone/zone.module';
import { SousZoneModule } from './localites/sous_zone/sous_zone.module';
import { LocaliteModule } from './localites/localite/localite.module';
import { RoleModule } from './auth/role/role.module';
import { ProfileModule } from './auth/profile/profile.module';
import { TypeOpModule } from './ops/type_op/type_op.module';
import { OpModule } from './ops/op/op.module';
import { ProducteurModule } from './ops/producteur/producteur.module';
import { PointCollecteModule } from './ops/point_collecte/point_collecte.module';
import { VillageModule } from './localites/village/village.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), 
    AuthModule,
    RoleModule,
    ProfileModule,
    PrismaModule,
    MailerModule,
    PostModule,
    CommentModule,
    PaysModule,
    ZoneModule,
    SousZoneModule,
    LocaliteModule,
    TypeOpModule,
    OpModule,
    ProducteurModule,
    PointCollecteModule,
    VillageModule]
})
export class AppModule {}
