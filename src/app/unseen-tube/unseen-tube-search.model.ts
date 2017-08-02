export class UnseenTubeQuery {
  get pageToken(): string {
    return this._pageToken;
  }

  get searchType(): SearchType {
    return this._searchType;
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

  /**
   * Search query data
   */
  private _searchQuery: string;
  private _maxViews: number;
  private _publishedBefore: number;
  /* Search mode */
  private _searchType: SearchType;
  /* Custom page token */
  private _pageToken: string;

  constructor(searchQuery: string, maxViews: number, publishedBefore: number, searchType: SearchType) {
    this._searchQuery = searchQuery;

    this._maxViews = maxViews;
    this._publishedBefore = publishedBefore;
    this._searchType = searchType;
  }
}

/**
 * Page Info
 */
export class PageInfo {
  get nextPageToken(): string {
    return this._nextPageToken;
  }

  get prevPageToken(): string {
    return this._prevPageToken;
  }

  public totalResults: number;

  private _prevPageToken: string;
  private _nextPageToken: string;

  public updatePageInfo(resultsJSON) {
    this.totalResults = resultsJSON.pageInfo.totalResults;
    this._prevPageToken = resultsJSON.prevPageToken;
    this._nextPageToken = resultsJSON.nextPageToken;
  }
}

/**
 * Page mode
 */
export enum SearchType {
  NEXT_PAGE,
  NEW_SEARCH,
  PREVIOUS_PAGE,
  JUMP_TO_PAGE
}
