import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionProfesionalesComponent } from './informacion-profesionales.component';

describe('InformacionProfesionalesComponent', () => {
  let component: InformacionProfesionalesComponent;
  let fixture: ComponentFixture<InformacionProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionProfesionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
