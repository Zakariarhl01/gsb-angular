import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinSeulComponent } from './medecin-seul.component';

describe('MedecinSeulComponent', () => {
  let component: MedecinSeulComponent;
  let fixture: ComponentFixture<MedecinSeulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinSeulComponent]
    });
    fixture = TestBed.createComponent(MedecinSeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
