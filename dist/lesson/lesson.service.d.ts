import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    getLesson(id: string): Promise<Lesson>;
    allLessons(): Promise<Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson>;
}
