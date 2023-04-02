import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaUniComponent } from './experiencia-uni.component';

describe('ExperienciaUniComponent', () => {
  let component: ExperienciaUniComponent;
  let fixture: ComponentFixture<ExperienciaUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
