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

  /**
   * Search query data
   */
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
