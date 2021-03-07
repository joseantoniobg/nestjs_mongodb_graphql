import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
export declare class StudentResolver {
    private studentService;
    constructor(studentService: StudentService);
    AllStudents(): Promise<import("./student.entity").Student[]>;
    student(id: string): Promise<import("./student.entity").Student>;
    createStudent(createStudentInput: CreateStudentInput): Promise<import("./student.entity").Student>;
}
