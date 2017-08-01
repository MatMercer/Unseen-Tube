import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {PageInfo, SearchType, UnseenTubeQuery} from './unseen-tube-query.model';
import {UnseenTubeVideoCollectionService} from './unseen-tube-video-collection/unseen-tube-video-collection.service';
import {UnseenTubeVideo} from './unseen-tube-video/unseen-tube-video.model';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class UnseenTubeService {
  get pageInfo(): PageInfo {
    return this._pageInfo;
  }
  /**
   * API setup
   */
  private API_KEY = 'AIzaSyBjkk77b_Wey0IsVqHmAh9rbk13nuFaJaU';
  private SEARCH_API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private VIDEO_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

  /**
   * The current query, used to filter nad
   * setup pagination
   */
  private currentQuery: UnseenTubeQuery;

  /**
   * The current found videos (filtered by current query)
   */
  get currentVideos(): UnseenTubeVideo[] {
    return this._currentVideos;
  }

  /**
   * Current videos
   */
  private _currentVideos: UnseenTubeVideo[];

  /**
   * Current pageInfo
   */
  private _pageInfo: PageInfo;

  constructor(private http: Http,
              private unseenTubeVideoCollection: UnseenTubeVideoCollectionService) {
    this._currentVideos = [];
    this._pageInfo = new PageInfo();

    /* Used for testing */
    // this._currentVideos = [
    //   new UnseenTubeVideo('dQw4w9WgXcQ', 336462569, null),
    //   new UnseenTubeVideo('lXMskKTw3Bc', 16341950, null),
    //   new UnseenTubeVideo('gYOEyzBFYa4', 4921934, null),
    //   new UnseenTubeVideo('RgKAFK5djSk', 2968302226, null)
    // ]
  }

  /**
   * Performs a Youtube search using a query
   * @param newQuery
   */
  performSearch(newQuery: UnseenTubeQuery) {
    if (newQuery.searchType === SearchType.NEW_SEARCH) {
      /*
       Updates the current query for later use
       if the user wants to use the next page
       */
      this.currentQuery = newQuery;
    }

    /*
     Creates the API parameters
     */
    const params: URLSearchParams = new URLSearchParams();
    params.set('part', 'id');
    params.set('q', this.currentQuery.searchQuery);
    params.set('type', 'video');
    params.set('publishedBefore', encodeURI(this.currentQuery.publishedBefore + '-01-01T00:00:00Z'));
    params.set('maxResults', '50');
    params.set('key', this.API_KEY);

    /* If next/prev page search, setup it */
    if (newQuery.searchType === SearchType.NEXT_PAGE) {
      console.log(this._pageInfo);
      params.set('pageToken', this._pageInfo.nextPageToken);
    }

    /* Makes the API request with the parameters */
    return this.http
      .get(this.SEARCH_API_URL, {
        search: params
      }).flatMap(
        (response) => this.onSearchSuccess(response.json())
      );
  }

  /**
   * Called when the search API returns success.
   * This functions calls the videos API to get
   * videos statistics based on the found ID's
   * @param response
   */
  private onSearchSuccess(response) {
    console.log(response);
    this._pageInfo.updatePageInfo(response);

    /*
     Creates the API parameters
     */
    const params: URLSearchParams = new URLSearchParams();
    params.set('part', 'statistics');
    /* Here the videos ID's are passed to the other Youtube API */
    params.set('id', this.unseenTubeVideoCollection.getVideosIdsFromJson(response.items).join());
    params.set('key', this.API_KEY);

    /* Makes the API request with the parameters */
    return this.http
      .get(this.VIDEO_API_URL, {
        search: params
      }).map(
        (statistics) => this.onVideosStatsSuccess(statistics.json()),
        (error) => this.onApiError(error.json())
      );

    // this._currentVideos = this._unseenTubeVideoService.getVideosWithFilter(this.currentQuery);
  }

  /**
   * This function finds the videos statistics and
   * filters them
   * @param videosStatis
   */
  private onVideosStatsSuccess(videosStatis) {

    /* Sends to the data to the videos service */
    this.unseenTubeVideoCollection.parseVideosFromJSON(videosStatis.items);

    this._currentVideos = this.unseenTubeVideoCollection.getVideosWithFilter(this.currentQuery);

    return this._currentVideos;
  }

  /**
   * Called when any of the API's returns an error :(
   * @param error
   */
  // TODO: Better error message
  private onApiError(error: JSON) {
    console.log(error)
  }

}

