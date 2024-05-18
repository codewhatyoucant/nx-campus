import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateLessonDTO } from './dtos/createLesson.dto';
import { LessonService } from './lesson.service';
import { Lesson } from './schema/lesson.schema';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('lesson')
@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  @ApiOperation({ summary: 'Get all lessons' })
  @ApiOkResponse({ description: 'List of lessons', type: [Lesson] })
  async getLessons(): Promise<Lesson[]> {
    return this.lessonService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create Lesson' })
  @ApiBody({ type: CreateLessonDTO })
  @ApiOkResponse({ description: 'Lesson Created', type: Lesson })
  async createLesson(@Body() createLessonDto: CreateLessonDTO): Promise<Lesson> {
    return this.lessonService.create(createLessonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Lesson' })
  @ApiOkResponse({ description: 'Lesson Deleted' })
  async deleteLesson(@Param('id') id: string): Promise<void> {
    await this.lessonService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Lesson' })
  @ApiBody({ type: CreateLessonDTO })
  @ApiOkResponse({ description: 'Lesson Updated', type: Lesson })
  async updateLesson(@Param('id') id: string, @Body() updateLessonDto: CreateLessonDTO): Promise<Lesson> {
    return this.lessonService.update(id, updateLessonDto);
  }
}
