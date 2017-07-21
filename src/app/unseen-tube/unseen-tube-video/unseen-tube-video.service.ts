import {Injectable} from '@angular/core';
import {UnseenTubeVideo} from './unseen-tube-video.model';
import {UnseenTubeQuery} from '../unseen-tube-query.model';

@Injectable()
export class UnseenTubeVideoService {
  get videos(): UnseenTubeVideo[] {
    return this._videos;
  }

  private _videos: UnseenTubeVideo[];

  getVideosIdsFromJson(items) {
    const ids: string[] = [];

    /* Iterates through all the videos inside items json and get the id's */
    for (const video of items) {
      ids.push(video.id.videoId);
    }

    return ids;
  }

  private filterVideoByQuery(query: UnseenTubeQuery) {
    return function(video) {
      return video.views <= query.maxViews;
    }
  }

  addVideo(videoId: string, views: number, postDate: Date) {
    this.addVideoObj(new UnseenTubeVideo(videoId, views, postDate));
  }

  addVideoObj(newVideo: UnseenTubeVideo) {
    this.videos.push(newVideo);
  }

  clearVideos() {
    this._videos = [];
  }

  parseVideosFromJSON(items) {
    /* Clear the videos since it is a new video data array */
    this.clearVideos();

    /* Iterates through all the videos inside items json and adds it */
    for (const video of items) {
      this.addVideo(video.id.videoId, video.statistics.viewCount, null);
    }

    console.log(this._videos);
  }

  getVideosWithFilter(currentQuery: UnseenTubeQuery) {
    return this._videos.filter(this.filterVideoByQuery(currentQuery));
  }

}
