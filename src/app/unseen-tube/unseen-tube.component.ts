import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css']
})
export class UnseenTubeComponent implements OnInit {
  searchQuery: string;
  isSearching: boolean;
  maxViews: number;
  publishedBefore: number;

  constructor() {
    /* Variables setup */
    this.searchQuery = 'webdriver torso';
    this.isSearching = false;
    this.maxViews = 500;
    this.publishedBefore = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
