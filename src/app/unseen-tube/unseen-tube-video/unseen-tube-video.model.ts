export class UnseenTubeVideo {
  get thumbUrl(): string {
    return this._thumbUrl;
  }
  get channelTitle(): string {
    return this._channelTitle;
  }

  get title(): string {
    return this._title;
  }

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
  private _title: string;
  private _channelTitle: string;
  private _videoId: string;
  private _views: number;
  private _postDate: Date;
  private _thumbUrl: string;

  constructor(title: string, author: string, videoId: string, views: number, postDate: Date, thumbUrl: string) {
    this._title = title;
    this._channelTitle = author;
    this._videoId = videoId;
    this._views = views;
    this._postDate = postDate;
    this._thumbUrl = thumbUrl;
  }
}

