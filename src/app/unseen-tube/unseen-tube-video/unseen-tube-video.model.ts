export class UnseenTubeVideo {
  /* Video data */
  private videoId: string;
  private views: number;
  private postDate: Date;

  constructor(videoId: string, views: number, postDate: Date) {
    this.videoId = videoId;
    this.views = views;
    this.postDate = postDate;
  }
}

