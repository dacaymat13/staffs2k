import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMainComponent } from './exp-main.component';

describe('ExpMainComponent', () => {
  let component: ExpMainComponent;
  let fixture: ComponentFixture<ExpMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
