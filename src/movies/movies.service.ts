import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ObjectId } from "mongodb";
import { Movies } from "./entities/movies.entity";
import { NewMovie, UpdatedMovie } from "./types";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private mongodb: Repository<Movies>,
  ) {}

  async create(movie: NewMovie) {
    try {
      await this.mongodb.insert(movie);
    } catch (error) {
      console.log(error);
    }

    return;
  }

  async findAll() {
    return await this.mongodb.find();
  }

  async findOne(_id: string) {
    return this.mongodb.findOneBy({ _id: new ObjectId(_id) });
  }

  async update(_id: string, movie: UpdatedMovie) {
    await this.mongodb.update(_id, movie);
    return;
  }

  async remove(_id: string) {
    await this.mongodb.delete(_id);
    return;
  }
}
