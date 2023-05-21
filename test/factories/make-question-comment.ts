import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  IQuestionComment,
  QuestionComment,
} from "@/domain/forum/enterprise/entities/question-comment";
import { faker } from "@faker-js/faker";

export function makeQuestionComment(
  override: Partial<IQuestionComment> = {},
  id?: UniqueEntityID
) {
  const question = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id
  );

  return question;
}
