import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnseenTubeVideoComponent} from './unseen-tube-video.component';

describe('UnseenTubeVideoComponent', () => {
  let component: UnseenTubeVideoComponent;
  let fixture: ComponentFixture<UnseenTubeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnseenTubeVideoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnseenTubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
