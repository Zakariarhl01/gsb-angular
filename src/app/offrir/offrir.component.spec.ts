import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrirComponent } from './offrir.component';

describe('OffrirComponent', () => {
  let component: OffrirComponent;
  let fixture: ComponentFixture<OffrirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffrirComponent]
    });
    fixture = TestBed.createComponent(OffrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
