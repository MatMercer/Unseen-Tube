import {inject, TestBed} from '@angular/core/testing';

import {UnseenTubeVideoCollectionService} from './unseen-tube-video-collection.service';

describe('UnseenTubeVideoCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnseenTubeVideoCollectionService]
    });
  });

  it('should be created', inject([UnseenTubeVideoCollectionService], (service: UnseenTubeVideoCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
