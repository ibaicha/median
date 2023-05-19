import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy.service';
import { RoleModule } from './role/role.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [JwtModule.register({}), RoleModule, ProfileModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
