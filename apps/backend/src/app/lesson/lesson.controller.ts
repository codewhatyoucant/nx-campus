import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateLessonDTO } from './dtos/createLesson.dto';

import { LessonService } from './lesson.service';
import { Lesson } from './schema/lesson.schema';

@Controller('lesson')
export class LessonController {
    constructor(private readonly lessonService: LessonService) { }

    @Get()
    async getLessons(): Promise<Lesson[]> {
        return this.lessonService.findAll();
    }

    @Post()
    async createLesson(@Body() createLessonDto: CreateLessonDTO) {
        await this.lessonService.create(createLessonDto);
    }

    @Delete(':id')
    async deleteLesson(@Param('id') id: string) {
        await this.lessonService.delete(id);
    }

    @Patch(':id')
    async updateLesson(@Param('id') id: string, @Body() updateLessonDto: CreateLessonDTO) {
        await this.lessonService.update(id, updateLessonDto);
    }
}
