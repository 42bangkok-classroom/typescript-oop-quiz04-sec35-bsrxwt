import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class UserService{
    test(){
        return [];
    }
    // findAll(): IUser[]{
    //     const fileData = fs.readFileSync(path.join(process.cwd,'user','user.json'),"utf-8");
    // }
}