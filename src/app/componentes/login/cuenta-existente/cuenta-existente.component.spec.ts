import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaExistenteComponent } from './cuenta-existente.component';

describe('CuentaExistenteComponent', () => {
  let component: CuentaExistenteComponent;
  let fixture: ComponentFixture<CuentaExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaExistenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
