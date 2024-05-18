import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDTO } from './dto/createCourse.dto';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  @ApiOperation({ summary: 'Get all courses' })
  @ApiOkResponse({ description: 'List of courses', type: [Course] })
  async getCourses(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create Course' })
  @ApiBody({ type: CreateCourseDTO })
  @ApiOkResponse({ description: 'Course Created', type: Course })
  async createCourse(@Body() createCourseDto: CreateCourseDTO): Promise<Course> {
    return this.courseService.create(createCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Course' })
  @ApiOkResponse({ description: 'Course Deleted' })
  async deleteCourse(@Param('id') id: string): Promise<void> {
    await this.courseService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Course' })
  @ApiBody({ type: CreateCourseDTO })
  @ApiOkResponse({ description: 'Course Updated', type: Course })
  async updateCourse(@Param('id') id: string, @Body() updateUserDto: CreateCourseDTO): Promise<Course> {
    return this.courseService.update(id, updateUserDto);
  }
}
