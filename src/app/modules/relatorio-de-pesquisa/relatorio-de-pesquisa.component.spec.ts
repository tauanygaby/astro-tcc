import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDePesquisaComponent } from './relatorio-de-pesquisa.component';

describe('RelatorioDePesquisaComponent', () => {
  let component: RelatorioDePesquisaComponent;
  let fixture: ComponentFixture<RelatorioDePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioDePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
