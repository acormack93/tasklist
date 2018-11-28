import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { DataServiceService } from './shared/data-service.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
