import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGatewayComponent } from './update-gateway.component';

describe('UpdateGatewayComponent', () => {
  let component: UpdateGatewayComponent;
  let fixture: ComponentFixture<UpdateGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
