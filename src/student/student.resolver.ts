import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor (private studentService: StudentService){}

    @Query(returns => [StudentType])
    AllStudents() {
        return this.studentService.allStudents();
    }

    @Query(returns => StudentType)
    student(
        @Args('id') id: string,
    ) {
        return this.studentService.student(id);
    }

    @Mutation(returns => StudentType)
    createStudent(
      @Args('createStudentInput') createStudentInput: CreateStudentInput,
    ) {
        return this.studentService.createStudent(createStudentInput);
    }

}