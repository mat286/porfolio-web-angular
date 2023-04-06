import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoUniComponent } from './cono-uni.component';

describe('ConoUniComponent', () => {
  let component: ConoUniComponent;
  let fixture: ComponentFixture<ConoUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConoUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConoUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
