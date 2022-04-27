import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryDetailsComponent } from './add-salary-details.component';

describe('AddSalaryDetailsComponent', () => {
  let component: AddSalaryDetailsComponent;
  let fixture: ComponentFixture<AddSalaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalaryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
