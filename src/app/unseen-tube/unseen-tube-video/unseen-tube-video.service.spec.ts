import { TestBed, inject } from '@angular/core/testing';

import { UnseenTubeVideoService } from './unseen-tube-video.service';

describe('UnseenTubeVideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnseenTubeVideoService]
    });
  });

  it('should be created', inject([UnseenTubeVideoService], (service: UnseenTubeVideoService) => {
    expect(service).toBeTruthy();
  }));
});
