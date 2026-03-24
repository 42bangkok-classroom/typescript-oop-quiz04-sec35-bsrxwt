import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class UserService {
  test() {
    return [];
  }
  findAll(): IUser[] {
    const fileData = fs.readFileSync(
      path.join(process.cwd(), 'data', 'users.json'),
      'utf-8',
    );
    return JSON.parse(fileData) as IUser[];
  }
  findOne(id: string, fields?: string[]): IUser | Partial<IUser> {
    const users = this.findAll();
    const user = users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // if(!fields||fields.length===0){
    //   return {};
    // }
    if (fields && fields.length > 0) {
      const fielduser: Partial<IUser> = {};
      fields.forEach((field) => {
        if (field in user) {
          fielduser[field as keyof IUser] = user[field as keyof IUser];
        }
      });
      return fielduser;
    }
    return user;
  }
}
