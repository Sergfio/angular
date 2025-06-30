import { Component, Output, EventEmitter, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary  = '' ;
  enteredDate = new Date().toISOString().slice(0, 10); // Default to today's date
  private tasksService = inject(TasksService)


  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: new Date(this.enteredDate)
    }, this.userId ); // Replace 'u1' with the actual user ID as needed
    }
  }
