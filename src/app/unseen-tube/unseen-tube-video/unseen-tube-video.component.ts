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

  constructor() { }

  ngOnInit() {
  }

}
