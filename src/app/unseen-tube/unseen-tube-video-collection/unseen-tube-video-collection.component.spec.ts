import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenTubeVideoCollectionComponent } from './unseen-tube-video-collection.component';

describe('UnseenTubeVideoCollectionComponent', () => {
  let component: UnseenTubeVideoCollectionComponent;
  let fixture: ComponentFixture<UnseenTubeVideoCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnseenTubeVideoCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnseenTubeVideoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
