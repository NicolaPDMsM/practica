import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProfesionalComponent } from './crear-profesional.component';

describe('CrearProfesionalComponent', () => {
  let component: CrearProfesionalComponent;
  let fixture: ComponentFixture<CrearProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearProfesionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
