import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosiniComponent } from './fotosini.component';

describe('FotosiniComponent', () => {
  let component: FotosiniComponent;
  let fixture: ComponentFixture<FotosiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
