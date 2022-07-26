import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MoviesModule } from "./movies/movies.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movies } from "./movies/entities/movies.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MoviesModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: process.env.MONGO_URL,
      database: "movies-catalog",
      entities: [Movies],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
