import { Module } from "@nestjs/common";
import { TagController } from "./tag.controller";

@Module({
    controllers:[TagController], // dependency injection
})
export class TagModule {

}