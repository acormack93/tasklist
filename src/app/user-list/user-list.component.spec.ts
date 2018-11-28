import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule
} from '@angular/material';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
