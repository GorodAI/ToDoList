import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListContainerComponent } from './Components/todo-list-container/todo-list-container.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { ListItemComponent } from './Components/list-item/list-item.component';
import { AddNewListItemComponent } from './Components/add-new-list-item/add-new-list-item.component';

import { AutofocusDirective } from './Directives/autofocus.directive';
import { FocusoutOnEnterDirective } from './Directives/focusout.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListContainerComponent,
    TodoListComponent,
    ListItemComponent,
    AddNewListItemComponent,
    AutofocusDirective,
    FocusoutOnEnterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
