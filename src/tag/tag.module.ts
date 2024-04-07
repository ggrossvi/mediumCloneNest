import { Module } from "@nestjs/common";
import { TagController } from "./tag.controller";
import { TagService } from "./tag.service";

@Module({
    controllers:[TagController], // dependency injection
    providers: [TagService]
})
export class TagModule {

}