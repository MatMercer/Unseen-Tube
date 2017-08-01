import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {UnseenTubeService} from './unseen-tube.service';
import {SearchType, UnseenTubeQuery} from './unseen-tube-query.model';
import {UnseenTubeVideoCollectionService} from './unseen-tube-video-collection/unseen-tube-video-collection.service';
import {UnseenTubeVideo} from "./unseen-tube-video/unseen-tube-video.model";
import {isUndefined} from "util";


@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css'],
  providers: [UnseenTubeService, UnseenTubeVideoCollectionService]
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

  private performSearch(searchType?: SearchType) {
    this.isSearching = true;

    if (isUndefined(searchType)) {
      searchType = SearchType.NEW_SEARCH;
    }

    this.unseenService.performSearch(new UnseenTubeQuery(this.searchQuery, this.maxViews, this.publishedBefore, searchType))
      .subscribe(() => this.finishSearch());

  }

  private nextPage() {
    this.performSearch(SearchType.NEXT_PAGE);
  }

  private previousPage() {
    this.performSearch(SearchType.PREVIOUS_PAGE);
  }

  private finishSearch() {
    this.isSearching = false;

    /* Automatically go to next or previous page when necessary */
    if (this.unseenService.currentVideos.length === 0 ) {
        if (!isUndefined(this.unseenService.pageInfo.nextPageToken)) {
          this.nextPage();
        } else if
        (!isUndefined(this.unseenService.pageInfo.prevPageToken)) {
          /* TODO: Tell the user that no more results was found in the next page */
          this.previousPage();
        }
        /* TODO: Tell the user that no results was found */
    }
  }
}


