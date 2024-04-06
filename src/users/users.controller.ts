import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './dtos/update-user-dto';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }

    @Get(':username')
    findOne(@Param('username') username: string) {
        try {
            return this.usersService.findOne(username)
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    @Put(':username')
    update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(username, updateUserDto);
    }

    @Delete(':username')
    remove(@Param('username') username: string) {
        return this.usersService.delete(username);
    }

    // @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.usersService.findAll()
    }
}
