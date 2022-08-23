import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputformComponent } from './inputform/inputform.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TodoService } from './todo.service';
import { DeleteallComponent } from './deleteall/deleteall.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TasklistComponent,
    InputformComponent,
    DeleteallComponent,
    UpdateComponent,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
