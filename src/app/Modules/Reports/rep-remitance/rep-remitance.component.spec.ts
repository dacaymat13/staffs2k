import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepRemitanceComponent } from './rep-remitance.component';

describe('RepRemitanceComponent', () => {
  let component: RepRemitanceComponent;
  let fixture: ComponentFixture<RepRemitanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepRemitanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepRemitanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
