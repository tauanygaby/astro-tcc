import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichamentoComponent } from './fichamento.component';

describe('FichamentoComponent', () => {
  let component: FichamentoComponent;
  let fixture: ComponentFixture<FichamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
