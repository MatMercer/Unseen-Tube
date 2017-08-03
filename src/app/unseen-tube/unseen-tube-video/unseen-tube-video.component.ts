import {Component, Input, OnInit} from '@angular/core';
import {UnseenTubeVideo} from './unseen-tube-video.model';

@Component({
  selector: 'app-unseen-tube-video',
  templateUrl: './unseen-tube-video.component.html',
  styleUrls: ['./unseen-tube-video.component.css']
})
export class UnseenTubeVideoComponent implements OnInit {
  @Input()
  public video: UnseenTubeVideo;

  public playRequested: boolean;

  constructor() {
    this.playRequested = false;
  }

  ngOnInit() {
  }

  /**
   * Returns a red percentage rbg CSS color based in the video views, eg:
   * views = 0 -> Returns pure red, 'rgb(255, 0, 0)'
   * views = 50 -> Returns 'rbg(125, 0, 0)'
   * views >= 100 -> Returns black
   * @returns {string}
   */
  getViewsRedColor() {
    if (this.video.views < 100) {
      return 'rgb(' + (Math.floor((Math.abs(this.video.views - 100) / 100) * 255)) + ', 0, 0)';
    }

    return 'rbg(0, 0, 0)';
  }

  play() {
    this.playRequested = true;
  }

}
