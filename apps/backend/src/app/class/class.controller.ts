import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Class } from './schemas/class.schema';

@ApiTags('class')
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @ApiOperation({ summary: 'Create Class' })
  @ApiBody({ type: CreateClassDto })
  @ApiOkResponse({ description: 'Class Created', type: Class })
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all classes' })
  @ApiOkResponse({ description: 'List of classes', type: [Class] })
  findAll() {
    return this.classService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get class by ID' })
  @ApiParam({ name: 'id', description: 'Class ID' })
  @ApiOkResponse({ description: 'Class details', type: Class })
  findOne(@Param('id') id: string) {
    return this.classService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update class by ID' })
  @ApiParam({ name: 'id', description: 'Class ID' })
  @ApiBody({ type: UpdateClassDto })
  @ApiOkResponse({ description: 'Class Updated', type: Class })
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete class by ID' })
  @ApiParam({ name: 'id', description: 'Class ID' })
  @ApiOkResponse({ description: 'Class Deleted' })
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
