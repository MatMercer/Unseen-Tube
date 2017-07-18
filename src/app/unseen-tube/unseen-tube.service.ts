import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

export class UnseenTubeQuery {
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
  private API_KEY = 'AIzaSyACIZPKUPvLwV9uhajLzI-zmBjlpBzbHYg';
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: Http) {
  }

  performSearch(query: UnseenTubeQuery) {
    const params: URLSearchParams = new URLSearchParams();

    params.set('part', 'id');
    params.set('q', query.searchQuery);
    params.set('type', 'video');
    params.set('publishedBefore', encodeURI(query.publishedBefore + '-01-01T00:00:00Z'));
    params.set('maxResults', '50');
    params.set('key', this.API_KEY);

    const results = this.http
      .get(this.API_URL, {
        search: params
      }).subscribe(
        (response) => this.onSearchSuccess(response.json()),
        (error) => this.onSearchError(error.json())
      );

    console.log(results);
  }

  private onSearchSuccess(response: JSON) {
    console.log(response);
  }

  private onSearchError(error: JSON) {
    console.log(error)
  }
}

