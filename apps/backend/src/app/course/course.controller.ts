import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDTO } from './dto/createCourse.dto';

import { CourseService } from './course.service';
import { Course, CourseSchema } from './schemas/course.schema';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get()
    async getCourses(): Promise<Course[]> {
        return this.courseService.findAll();
    }

    @Get(':id')
    async getCoursesDetails(@Param('id') id: string): Promise<Course> {
        return this.courseService.findOne(id);
    }

    @Post()
    async createCourse(@Body() createCourseDto: CreateCourseDTO) {
        await this.courseService.create(createCourseDto);
    }

    @Delete(':id')
    async deleteCourse(@Param('id') id: string) {
        await this.courseService.delete(id);
    }

    @Patch(':id')
    async updateCourse(@Param('id') id: string, @Body() updateUserDto: CreateCourseDTO) {
        await this.courseService.update(id, updateUserDto);
    }
}
