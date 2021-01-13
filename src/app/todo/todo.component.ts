import { Component, OnInit } from '@angular/core';
// import { truncate } from 'fs';

interface Todo {
  task: string;
  completed: boolean;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
public filter: string = "";
public newTask: string = "";


  todos : Todo[] =[
    {
      task: "Make Vet appointments",
      completed: false
    },
    {
      task: "Wrap Grandma's gifts",
      completed: true
    },
    {
      task: "Vacuum",
      completed: true
    },
    {
      task: "Grocery Shopping",
      completed: false
    }
  ]



 //Add item to the bottom of the list
  // Submitting the form calls a function named addTask that adds a new todo to the array
  // with the complete property set to false.
  addTask = function (newTask): void{
    if (this.newTask.trim()!=''){
      let newTodo: Todo = {task: this.newTask,completed:false};
      this.todos.push(newTodo);
    }
  }


 //Filter the list
  // The text input at the top is for filtering. It filters as you type.
  getFilteredResults(): Todo[] {
    return this.todos.filter((todo) => {
      const taskLower = todo.task.toLowerCase();
      const filterLower = this.filter.toLowerCase();
      return taskLower.includes(filterLower);
    });
  };

  //Remove item from list with "X"
    // Clicking the “x” on an item executes a function named removeTask that removes that
    // item from the array.
   removeTask = function (todo:string) : void{
      let removeIndex = this.todos.findIndex(obj => obj.task === todo);
      this.todos.splice(removeIndex, 1);
    };


  //Mark items complete with "COMPLETE" button
  //  Clicking the “complete” button executes a function named completeTask that sets the
  //  task’s completed property to true.
  completeTask=function (todo:Todo): void {
    todo.completed=true;
  }


  


  constructor() { }

  ngOnInit(): void {
  }
  
}
