import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenTubeComponent } from './unseen-tube.component';

describe('UnseenTubeComponent', () => {
  let component: UnseenTubeComponent;
  let fixture: ComponentFixture<UnseenTubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnseenTubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnseenTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
