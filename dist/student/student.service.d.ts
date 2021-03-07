import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    allStudents(): Promise<Student[]>;
    student(id: string): Promise<Student>;
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    getManyStudents(studentIds: string[]): Promise<Student[]>;
}
