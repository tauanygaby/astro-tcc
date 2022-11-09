import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTalkComponent } from './delete-talk.component';

describe('DeleteTalkComponent', () => {
  let component: DeleteTalkComponent;
  let fixture: ComponentFixture<DeleteTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
