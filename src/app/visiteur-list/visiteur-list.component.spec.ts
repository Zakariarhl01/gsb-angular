import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurListComponent } from './visiteur-list.component';

describe('VisiteurListComponent', () => {
  let component: VisiteurListComponent;
  let fixture: ComponentFixture<VisiteurListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisiteurListComponent]
    });
    fixture = TestBed.createComponent(VisiteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
