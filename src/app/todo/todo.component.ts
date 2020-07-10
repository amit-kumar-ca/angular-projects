import { ActivatedRoute, RouterLink } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

export class Todo {
  private id: number;
  private username: string;
  private description: string;
  private targetDate: Date;
  private isDone: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos;
  errorMessage;
  username;
  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.todoDataService.getTodos(this.username).subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    )
  }

  handleSuccess(response) {
    this.todos = response;
    console.log(this.todos);
  }
  handleError(error) {
    this.errorMessage = error.error.message;
  }

}
