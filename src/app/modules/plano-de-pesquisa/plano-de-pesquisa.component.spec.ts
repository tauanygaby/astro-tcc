import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDePesquisaComponent } from './plano-de-pesquisa.component';

describe('PlanoDePesquisaComponent', () => {
  let component: PlanoDePesquisaComponent;
  let fixture: ComponentFixture<PlanoDePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
