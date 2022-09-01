import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCronJObComponent } from './add-cron-job.component';

describe('AddCronJObComponent', () => {
  let component: AddCronJObComponent;
  let fixture: ComponentFixture<AddCronJObComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCronJObComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCronJObComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
