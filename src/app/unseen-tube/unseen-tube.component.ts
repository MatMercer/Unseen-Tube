import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {UnseenTubeService} from './unseen-tube.service';
import {UnseenTubeQuery} from './unseen-tube-query.model';
import {UnseenTubeVideoService} from './unseen-tube-video/unseen-tube-video.service';
import {UnseenTubeVideo} from "./unseen-tube-video/unseen-tube-video.model";


@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css'],
  providers: [UnseenTubeService, UnseenTubeVideoService]
})
export class UnseenTubeComponent implements OnInit {
  searchQuery: string;
  isSearching: boolean;
  maxViews: number;
  publishedBefore: number;
  @ViewChild('searchButton') searchButton: ElementRef;

  constructor(protected unseenService: UnseenTubeService) {
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

    this.unseenService.performSearch(new UnseenTubeQuery(this.searchQuery, this.maxViews, this.publishedBefore))
      .subscribe(() => this.finishSearch());

  }

  private finishSearch() {
    this.isSearching = false;
  }
}


