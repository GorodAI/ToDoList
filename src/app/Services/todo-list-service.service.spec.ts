import { TestBed } from '@angular/core/testing';

import { TodoListServiceService } from './todo-list-service.service';

describe('TodoListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListServiceService = TestBed.get(TodoListServiceService);
    expect(service).toBeTruthy();
  });
});
