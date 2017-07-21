import { Injectable } from '@angular/core';
import {UnseenTubeVideo} from './unseen-tube-video.model';

@Injectable()
export class UnseenTubeVideoService {
  get videos(): UnseenTubeVideo[] {
    return this._videos;
  }
  private _videos: UnseenTubeVideo[];

  constructor() { }

  addVideo(newVideo: UnseenTubeVideo) {
    this.videos.push(newVideo);
  }

  clearVideos() {
    this._videos = [];
  }

}
