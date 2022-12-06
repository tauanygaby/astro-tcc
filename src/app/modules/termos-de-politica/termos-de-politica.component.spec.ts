import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosDePoliticaComponent } from './termos-de-politica.component';

describe('TermosDePoliticaComponent', () => {
  let component: TermosDePoliticaComponent;
  let fixture: ComponentFixture<TermosDePoliticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosDePoliticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDePoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
