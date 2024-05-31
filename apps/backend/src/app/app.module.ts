import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { ClassModule } from './class/class.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { RolesModule } from './roles/roles.module';
import { AdminModule } from './auth/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    UserModule,
    AuthModule,
    CourseModule,
    LessonModule,
    ClassModule,
    CurriculumModule,
    RolesModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
