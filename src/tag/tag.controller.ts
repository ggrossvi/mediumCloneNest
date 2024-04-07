import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller('tags')  // implements the route
export class TagController {
    constructor(private readonly tagService: TagService){}
    @Get() // get decorator
    findAll() {
        return this.tagService.findAll();
    }

}