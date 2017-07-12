import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css']
})
export class UnseenTubeComponent implements OnInit {
  searchQuery = 'webdriver torso';
  isSearching = false;
  maxViewsRange = [100, 500];

  /* maxViewsRange slider config */
  maxViewsRangeInputConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [10, 500],
    keyboard: true,  // same as [keyboard]="true"
    step: 15,
    range: {
      min: 0,
      max: 1000
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
