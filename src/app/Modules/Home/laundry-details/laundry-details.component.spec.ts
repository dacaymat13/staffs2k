import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryDetailsComponent } from './laundry-details.component';

describe('LaundryDetailsComponent', () => {
  let component: LaundryDetailsComponent;
  let fixture: ComponentFixture<LaundryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaundryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaundryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
