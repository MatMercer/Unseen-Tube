export class UnseenTubeVideo {
  get postDate(): Date {
    return this._postDate;
  }
  get views(): number {
    return this._views;
  }
  get videoId(): string {
    return this._videoId;
  }

  /**
   * Video data
   */
  private _videoId: string;
  private _views: number;
  private _postDate: Date;

  constructor(videoId: string, views: number, postDate: Date) {
    this._videoId = videoId;
    this._views = views;
    this._postDate = postDate;
  }

  /**
   * Increments the views by 1
   */
  public viewIt() {
    this._views += 1;
  }
}

