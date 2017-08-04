import {inject, TestBed} from '@angular/core/testing';

import {UnseenTubeService} from './unseen-tube.service';

describe('UnseenTubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnseenTubeService]
    });
  });

  it('should be created', inject([UnseenTubeService], (service: UnseenTubeService) => {
    expect(service).toBeTruthy();
  }));
});
