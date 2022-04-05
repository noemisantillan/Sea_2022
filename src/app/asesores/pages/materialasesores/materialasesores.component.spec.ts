import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialasesoresComponent } from './materialasesores.component';

describe('MaterialasesoresComponent', () => {
  let component: MaterialasesoresComponent;
  let fixture: ComponentFixture<MaterialasesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialasesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialasesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
