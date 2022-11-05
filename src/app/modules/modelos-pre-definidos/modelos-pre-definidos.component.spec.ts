import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPreDefinidosComponent } from './modelos-pre-definidos.component';

describe('ModelosPreDefinidosComponent', () => {
  let component: ModelosPreDefinidosComponent;
  let fixture: ComponentFixture<ModelosPreDefinidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosPreDefinidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosPreDefinidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
