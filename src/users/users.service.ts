import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { User } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dtos/update-user-dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.userHash(createUserDto.password)

    this.userModel.create(createUserDto)
  }

  findOne(username: string) {
    const findedUser = this.userModel.findOne({ username: username })
    return findedUser
  }

  findAll() {
    const findedUsers = this.userModel.find().select("-password")
    return findedUsers
  }

  async update(username: string, updateUserDto: UpdateUserDto) {

    const updatedUser = await this.userModel.findOneAndUpdate(
      { username: username },
      {
        username: updateUserDto.username,
        email: updateUserDto.email,
        age: updateUserDto.age,
      },
      { new: true }).select("-password");
    return updatedUser;
  }

  async delete(username: string) {
    try {
      const result = await this.userModel.deleteOne({ username: username });
      if (result.deletedCount === 0) {
        console.log("Usuário não encontrado ou já deletado.");
        return { success: false, message: "Usuário não encontrado ou já deletado." };
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      return { success: false, message: "Erro ao deletar usuário." };
    }
  }

  private async userHash(pass) {
    const saltOrRounds = 10
    const hashedPass = await bcrypt.hash(pass, saltOrRounds)
    return hashedPass
  }
}