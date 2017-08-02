import {Injectable} from '@angular/core';
import {UnseenTubeVideo} from '../unseen-tube-video/unseen-tube-video.model';
import {UnseenTubeQuery} from '../unseen-tube-search.model';

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


  /**
   * Creates a new video and add it to
   * the videos array
   * @param videoId
   * @param views
   * @param postDate
   */
  addVideo(videoId: string, views: number, postDate: Date) {
    this.addVideoObj(new UnseenTubeVideo(videoId, views, postDate));
  }

  /**
   * Adds an video object to the videos
   * array
   * @param newVideo
   */
  addVideoObj(newVideo: UnseenTubeVideo) {
    this.videos.push(newVideo);
  }

  /**
   * Clears all the current videos
   */
  clearVideos() {
    this._videos = [];
  }

  /**
   * Parses the videos from a videos
   * YouTube statistics JSON and add it to
   * the current videos
   * @param items
   */
  parseVideosFromJSON(items) {
    /* Clear the videos since it is a new video data array */
    this.clearVideos();

    /* Iterates through all the videos inside items json and adds it */
    for (const video of items) {
      this.addVideo(video.id, Number(video.statistics.viewCount), null);
    }
  }

  /**
   * Callback function for getVideosWithFilter
   * @param query
   * @returns {(video:any)=>boolean}
   */
  private filterVideoByQuery(query: UnseenTubeQuery) {
    return function (video) {
      return video.views < query.maxViews;
    }
  }

  /**
   * Returns a video array filtered by an UnseenTubeQuery
   * @param currentQuery
   * @returns {UnseenTubeVideo[]}
   */
  getVideosWithFilter(currentQuery: UnseenTubeQuery) {
    return this._videos.filter(this.filterVideoByQuery(currentQuery));
  }

}
