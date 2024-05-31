import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { Class, ClassSchema } from './schemas/class.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Class.name, schema: ClassSchema }]),
],  
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService, MongooseModule]
})
export class ClassModule { }
