import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionasesoresComponent } from './programacionasesores.component';

describe('ProgramacionasesoresComponent', () => {
  let component: ProgramacionasesoresComponent;
  let fixture: ComponentFixture<ProgramacionasesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionasesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionasesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
