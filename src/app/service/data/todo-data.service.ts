import { Todo } from './../../todo/todo.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getTodos(username){
   console.log(username);
   return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

}
