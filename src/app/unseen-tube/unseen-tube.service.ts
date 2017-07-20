import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

export class UnseenTubeQuery {
  get nextPageToken(): string {
    return this._nextPageToken;
  }

  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get publishedBefore(): number {
    return this._publishedBefore;
  }

  get maxViews(): number {
    return this._maxViews;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  private _searchQuery: string;
  private _maxViews: number;
  private _publishedBefore: number;
  private _nextPageToken: string;

  constructor(searchQuery: string, maxViews?: number, publishedBefore?: number) {
    this._searchQuery = searchQuery;

    this._maxViews = maxViews;

    if (publishedBefore) {
      this._publishedBefore = publishedBefore;
    } else {
      this._publishedBefore = new Date().getFullYear();
    }
  }


}

@Injectable()
export class UnseenTubeService {
  /* API setup */
  private API_KEY = 'AIzaSyACIZPKUPvLwV9uhajLzI-zmBjlpBzbHYg';
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';

  /* The current query */
  private currentQuery: UnseenTubeQuery;

  constructor(private http: Http) {}

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
  }

  private onSearchError(error: JSON) {
    console.log(error)
  }
}

