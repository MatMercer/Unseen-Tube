export class UnseenTubeQuery {
  /**
   * Search query data
   */
  searchQuery: string;
  maxViews: number;
  publishedBefore: number;
  /* Search mode */
  searchType: SearchType;

  constructor(searchQuery?: string, maxViews?: number, publishedBefore?: number, searchType?: SearchType) {
    this.searchQuery = searchQuery;

    this.maxViews = maxViews;
    this.publishedBefore = publishedBefore;
    this.searchType = searchType;
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
