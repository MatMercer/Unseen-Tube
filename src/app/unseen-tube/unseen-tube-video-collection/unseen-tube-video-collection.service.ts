import {Injectable} from '@angular/core';
import {UnseenTubeVideo} from '../unseen-tube-video/unseen-tube-video.model';
import {SortingType, UnseenTubeQuery} from '../unseen-tube-search.model';

@Injectable()
export class UnseenTubeVideoCollectionService {
  get videos(): UnseenTubeVideo[] {
    return this._videos;
  }

  /**
   * Current found videos
   */
  private _videos: UnseenTubeVideo[];

  /**
   * Get an string ID array of videos
   * from a JSON Youtube search API items
   * object.
   * @param items
   * @returns {string[]}
   */
  static getVideosIdsFromJson(items) {
    const ids: string[] = [];

    /* Iterates through all the videos inside items json and get the id's */
    for (const video of items) {
      ids.push(video.id.videoId);
    }

    return ids;
  }

  constructor() {
    this._videos = [];
  }

  /**
   * Parses the videos from a videos
   * YouTube statistics JSON and add it to
   * the current videos
   * @param items
   */
  parseVideosFromJSON(items) {
    /* Iterates through all the videos inside items json and adds it */
    const newVideos = [];
    for (const video of items) {
      newVideos.push(new UnseenTubeVideo(video.snippet.title, video.snippet.channelTitle, video.id,
        Number(video.statistics.viewCount), new Date(video.snippet.publishedAt), video.snippet.thumbnails.high.url));
    }

    this._videos = newVideos;
  }

  /**
   * Callback function for getVideosWithFilter
   * @param query
   * @returns {(video:any)=>boolean}
   */
  private filterVideoByQuery(query: UnseenTubeQuery) {
    return function (video: UnseenTubeVideo) {
      return video.views < query.maxViews && video.postDate.getFullYear() < query.publishedBefore;
    }
  }

  /**
   * Callback sort fuction for getVideosWithFilter
   */
  private sortVideoByQuery(query: UnseenTubeQuery) {
    return function (xVideo: UnseenTubeVideo, yVideo: UnseenTubeVideo) {
      if (query.sortMode === SortingType.ASCENDING) {
        return xVideo.views - yVideo.views;
      } else {
        return yVideo.views - xVideo.views;
      }
    }
  }

  /**
   * Returns a video array filtered and sorted by an UnseenTubeQuery
   * @param query
   * @returns {UnseenTubeVideo[]}
   */
  getVideosWithFilter(query: UnseenTubeQuery) {
    /* Filter the videos */
    const filteredVideos = this._videos.filter(this.filterVideoByQuery(query));

    /* Sort them */
    return filteredVideos.sort(this.sortVideoByQuery(query));
  }

}
