import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-unseen-tube-video',
  templateUrl: './unseen-tube-video.component.html',
  styleUrls: ['./unseen-tube-video.component.css']
})
export class UnseenTubeVideoComponent implements OnInit {
  @Input()
  public videoId: String;

  constructor() { }

  ngOnInit() {
  }

}
