import {Component, Input, OnInit} from '@angular/core';
import {UnseenTubeVideo} from "../unseen-tube-video/unseen-tube-video.model";

@Component({
  selector: 'app-unseen-tube-video-collection',
  templateUrl: './unseen-tube-video-collection.component.html',
  styleUrls: ['./unseen-tube-video-collection.component.css']
})
export class UnseenTubeVideoCollectionComponent implements OnInit {
  @Input()
  videoCollection: UnseenTubeVideo[];

  constructor() { }

  ngOnInit() {
  }

}
