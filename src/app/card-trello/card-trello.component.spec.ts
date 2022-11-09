import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrelloComponent } from './card-trello.component';

describe('CardTrelloComponent', () => {
  let component: CardTrelloComponent;
  let fixture: ComponentFixture<CardTrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
