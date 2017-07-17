import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css']
})
export class UnseenTubeComponent implements OnInit {
  searchQuery = 'webdriver torso';
  isSearching = false;
  maxViews = 500;

  constructor() {
  }

  ngOnInit() {
  }

}
