import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {UnseenTubeQuery} from './unseen-tube-query.model';
import {UnseenTubeVideoService} from './unseen-tube-video/unseen-tube-video.service';
import {UnseenTubeVideo} from './unseen-tube-video/unseen-tube-video.model';

@Injectable()
export class UnseenTubeService {
  get currentVideos(): UnseenTubeVideo[] {
    return this._currentVideos;
  }
  /* API setup */
  private API_KEY = 'AIzaSyBjkk77b_Wey0IsVqHmAh9rbk13nuFaJaU';
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';

  /* The current query */
  private currentQuery: UnseenTubeQuery;

  /* The current found videos */
  private _currentVideos: UnseenTubeVideo[];

  constructor(
    private http: Http,
    private _unseenTubeVideoService: UnseenTubeVideoService
  ) {}

  /**
   * Performs a Youtube search.
   * @param newQuery
   */
  performSearch(newQuery: UnseenTubeQuery) {

    /*
     Updates the current query for later use
     if the user wants to use the next page
     */
    this.currentQuery = newQuery;

    /*
      Creates the API parameters
     */
    const params: URLSearchParams = new URLSearchParams();
    params.set('part', 'id');
    params.set('q', newQuery.searchQuery);
    params.set('type', 'video');
    params.set('publishedBefore', encodeURI(newQuery.publishedBefore + '-01-01T00:00:00Z'));
    params.set('maxResults', '50');
    params.set('key', this.API_KEY);

    /* Makes the API request with the parameters */
    this.http
      .get(this.API_URL, {
        search: params
      }).subscribe(
        (response) => this.onSearchSuccess(response.json()),
        (error) => this.onSearchError(error.json())
      );
  }

  private onSearchSuccess(response) {
    console.log(response);
    /* Setup the next page token for later use */
    this.currentQuery.nextPageToken = response.nextPageToken;

    this._unseenTubeVideoService.parseVideosFromJSON(response.items);
  }

  private onSearchError(error: JSON) {
    console.log(error)
  }
}

