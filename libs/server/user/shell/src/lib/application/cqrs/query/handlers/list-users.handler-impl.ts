import { QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@todo-app/server/user/core/domain';
import { ListUsersHandler } from '@todo-app/server/user/core/application';
import { ListUsersQuery } from '@todo-app/server/user/core/application';

@QueryHandler(ListUsersQuery)
export class ListUsersHandlerImp extends ListUsersHandler {
  constructor(repo: UserRepository) {
    super(repo);
  }
}