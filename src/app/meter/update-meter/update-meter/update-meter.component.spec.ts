import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeterComponent } from './update-meter.component';

describe('UpdateMeterComponent', () => {
  let component: UpdateMeterComponent;
  let fixture: ComponentFixture<UpdateMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
