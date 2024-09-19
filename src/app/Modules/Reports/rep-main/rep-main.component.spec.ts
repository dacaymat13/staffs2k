import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepMainComponent } from './rep-main.component';

describe('RepMainComponent', () => {
  let component: RepMainComponent;
  let fixture: ComponentFixture<RepMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
