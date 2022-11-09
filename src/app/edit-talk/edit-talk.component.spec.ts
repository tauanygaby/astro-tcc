import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTalkComponent } from './edit-talk.component';

describe('EditTalkComponent', () => {
  let component: EditTalkComponent;
  let fixture: ComponentFixture<EditTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
