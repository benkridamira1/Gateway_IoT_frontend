import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronlistComponent } from './cronlist.component';

describe('CronlistComponent', () => {
  let component: CronlistComponent;
  let fixture: ComponentFixture<CronlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
