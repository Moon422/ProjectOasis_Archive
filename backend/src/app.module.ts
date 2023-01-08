import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/auth.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'oasisdb',
      username: 'oasisuser',
      password: 'H@2ami$zz',
      synchronize: true,
      entities: [Auth],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
