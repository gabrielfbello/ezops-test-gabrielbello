import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { ApiBody, ApiResponse } from "@nestjs/swagger";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post("/create")
  @ApiBody({ type: CreateMovieDto })
  @ApiResponse({
    description: "Creates a new movie",
  })
  async create(@Body() createMovieDto: CreateMovieDto, @Res() res) {
    await this.moviesService.create(createMovieDto);
    res.status(HttpStatus.CREATED).json(createMovieDto);
  }

  @Get("/all")
  @ApiResponse({
    description: "Returns all movies",
  })
  async findAll(@Res() res) {
    const movies = await this.moviesService.findAll();
    return res.json(movies);
  }
  @Get("/find/:id")
  @ApiResponse({
    description: "Returns a movie by its _id",
  })
  async findOne(@Param("id") id: string, @Res() res) {
    const movie = await this.moviesService.findOne(id);

    if (movie != null) {
      return res.json(movie);
    }

    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ message: "Movie not found" });
  }

  @Patch(":id")
  @ApiBody({ type: UpdateMovieDto })
  @ApiResponse({
    description: "Updates a movie by its _id",
  })
  async update(
    @Param("id") id: string,
    @Body() updateMovieDto: UpdateMovieDto,
    @Res() res,
  ) {
    await this.moviesService.update(id, updateMovieDto);
    return res.status(HttpStatus.OK).json({ message: "Movie updated" });
  }

  @Delete(":id")
  @ApiResponse({
    description: "Deletes a movie by its _id",
  })
  async remove(@Param("id") id: string, @Res() res) {
    await this.moviesService.remove(id);
    return res.status(HttpStatus.OK).json({ message: "Movie deleted" });
  }
}
