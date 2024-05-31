import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../user/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ClassService } from '../../class/class.service';
import { CourseService } from '../../course/course.service';
import { CurriculumService } from '../../curriculum/curriculum.service';
import { LessonService } from '../../lesson/lesson.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AdminController],
  providers: [
    AuthService,
    UserService,
    ClassService,
    CourseService,
    CurriculumService,
    LessonService,
    UserService,
  ],
})
export class AdminModule {}
