import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  root(): string {
    return JSON.stringify("Running! 🔥🔥🔥");
  }
}
