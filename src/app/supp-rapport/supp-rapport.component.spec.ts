import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppRapportComponent } from './supp-rapport.component';

describe('SuppRapportComponent', () => {
  let component: SuppRapportComponent;
  let fixture: ComponentFixture<SuppRapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppRapportComponent]
    });
    fixture = TestBed.createComponent(SuppRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
