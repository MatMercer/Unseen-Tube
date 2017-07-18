import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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
  @ViewChild('searchButton') searchButton: ElementRef;

  constructor() {
    /* Variables setup */
    this.searchQuery = 'webdriver torso';
    this.isSearching = false;
    this.maxViews = 500;
    this.publishedBefore = new Date().getFullYear();
  }

  ngOnInit() {
  }

  private performSearch() {
    this.isSearching = true;
    setTimeout(() => {this.isSearching = false}, 2000);
  }
}
