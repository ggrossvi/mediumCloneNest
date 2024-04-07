import { Controller, Get } from "@nestjs/common";

@Controller('tags')  // implements the route
export class TagController {
    @Get() // get decorator
    findAll() {
        return ['dragons', 'coffee'];
    }

}