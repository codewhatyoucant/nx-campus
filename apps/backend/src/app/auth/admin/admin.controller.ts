import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { Roles } from '../roles.decorator';
import { ClassService } from '../../class/class.service';
import { CourseService } from '../../course/course.service';
import { CurriculumService } from '../../curriculum/curriculum.service';
import { LessonService } from '../../lesson/lesson.service';
import { UserService } from '../../user/user.service';
import { CreateClassDto } from '../../class/dto/create-class.dto';
import { UpdateClassDto } from '../../class/dto/update-class.dto';
import { CreateCourseDTO } from '../../course/dto/createCourse.dto';
import { UpdateCourseDto } from '../../course/dto/updateCourse.dto';
import { CreateCurriculumDto } from '../../curriculum/dto/create-curriculum.dto';
import { UpdateCurriculumDto } from '../../curriculum/dto/update-curriculum.dto';
import { CreateLessonDTO } from '../../lesson/dtos/createLesson.dto';
import { UpdateLessonDto } from '../../lesson/dtos/updateLesson.dto';
import { CreateUserDTO } from '../../user/dtos/createUser.dto';
import { UpdateUserDto } from '../../user/dtos/updateCourse.dto';

@Controller('admin')
@UseGuards(AuthGuard)
@Roles('admin')
export class AdminController {
  constructor(
    private readonly classesService: ClassService,
    private readonly coursesService: CourseService,
    private readonly curriculumService: CurriculumService,
    private readonly lessonsService: LessonService,
    private readonly usersService: UserService,
  ) {}

  // Classes routes
  @Get('classes')
  async getAllClasses() {
    return this.classesService.findAll();
  }

  @Post('classes')
  async createClass(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Put('classes/:id')
  async updateClass(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(id, updateClassDto);
  }

  @Delete('classes/:id')
  async deleteClass(@Param('id') id: string) {
    return this.classesService.remove(+id);
  }

  // Courses routes
  @Get('courses')
  async getAllCourses() {
    return this.coursesService.findAll();
  }

  @Post('courses')
  async createCourse(@Body() createCourseDto: CreateCourseDTO) {
    return this.coursesService.create(createCourseDto);
  }

  @Put('courses/:id')
  async updateCourse(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete('courses/:id')
  async deleteCourse(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }

  // Curriculum routes
  @Get('curriculum')
  async getAllCurriculum() {
    return this.curriculumService.findAll();
  }

  @Post('curriculum')
  async createCurriculum(@Body() createCurriculumDto: CreateCurriculumDto) {
    return this.curriculumService.create(createCurriculumDto);
  }

  @Put('curriculum/:id')
  async updateCurriculum(@Param('id') id: string, @Body() updateCurriculumDto: UpdateCurriculumDto) {
    return this.curriculumService.update(id, updateCurriculumDto);
  }

  @Delete('curriculum/:id')
  async deleteCurriculum(@Param('id') id: string) {
    return this.curriculumService.delete(id);
  }

  // Lessons routes
  @Get('lessons')
  async getAllLessons() {
    return this.lessonsService.findAll();
  }

  @Post('lessons')
  async createLesson(@Body() createLessonDto: CreateLessonDTO) {
    return this.lessonsService.create(createLessonDto);
  }

  @Put('lessons/:id')
  async updateLesson(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(id, updateLessonDto);
  }

  @Delete('lessons/:id')
  async deleteLesson(@Param('id') id: string) {
    return this.lessonsService.delete(id);
  }

  // Users routes
  @Get('users')
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return this.usersService.create(createUserDto);
  }

  @Put('users/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
