import { type NewTaskData } from "./task/task.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Aufgabe Angular',
      summary: 'Aufgabe 1',
      date: new Date(),

    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Aufgabe 2',
      date: new Date(),

    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular 3',
      summary: 'Aufgabe 3',
      date: new Date(),

    },
  ];

  getUserTasks(userId: string) {
     this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
this.tasks.unshift({
        id:  new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        date: new Date(taskData.date)
      });
  }

  removeTask(id: string) {
     this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
