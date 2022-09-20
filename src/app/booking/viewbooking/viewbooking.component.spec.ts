import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { ViewbookingComponent } from './viewbooking.component';

describe('ViewbookingComponent', () => {
  let component: ViewbookingComponent;
  let fixture: ComponentFixture<ViewbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ ViewbookingComponent ],
      providers:[
        HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
