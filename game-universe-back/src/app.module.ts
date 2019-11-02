import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    schema: 'game_universe_2020',
    username: 'xbbhrkvssfuetu',
    host: 'ec2-54-195-252-243.eu-west-1.compute.amazonaws.com',
    database: "dcbdsmfutcv57e",
    password: "a13806713fe574ff9dfa2288840c12ca9f66ab2579e851341a8ce87c4e2ce15c",
    port: 5432,
    ssl: true,
    entities: [],
    synchronize: false

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
