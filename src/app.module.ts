import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})

export class AppModule {}
