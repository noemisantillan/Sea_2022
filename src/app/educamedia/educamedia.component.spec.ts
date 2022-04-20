import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducamediaComponent } from './educamedia.component';

describe('EducamediaComponent', () => {
  let component: EducamediaComponent;
  let fixture: ComponentFixture<EducamediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducamediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducamediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
