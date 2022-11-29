import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Attendance } from './Employee/entity/attendance.entity';
import { Break } from './Employee/entity/break.entity';
import { Department } from './Employee/entity/department.entity';
import { Message } from './Employee/entity/message.entity';
import { Employee } from './Employee/entity/user.entity';
import { Vacation } from './Employee/entity/vacation.entity';
import { WorkProfile } from './Employee/entity/workProfile.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'EmployeeAM',
      entities: [Employee,Attendance,Vacation, WorkProfile, Department, Message, Break],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
