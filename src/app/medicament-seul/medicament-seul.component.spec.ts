import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentSeulComponent } from './medicament-seul.component';

describe('MedicamentSeulComponent', () => {
  let component: MedicamentSeulComponent;
  let fixture: ComponentFixture<MedicamentSeulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentSeulComponent]
    });
    fixture = TestBed.createComponent(MedicamentSeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
