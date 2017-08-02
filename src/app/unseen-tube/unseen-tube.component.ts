import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {UnseenTubeService} from './unseen-tube.service';
import {SearchType, UnseenTubeQuery} from './unseen-tube-search.model';
import {UnseenTubeVideoCollectionService} from './unseen-tube-video-collection/unseen-tube-video-collection.service';
import {isUndefined} from 'util';


@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css'],
  providers: [UnseenTubeService, UnseenTubeVideoCollectionService]
})
export class UnseenTubeComponent implements OnInit {
  searchQuery: string;
  lastSearchQuery: string;
  isSearching: boolean;
  maxViews: number;
  publishedBefore: number;
  @ViewChild('searchButton') searchButton: ElementRef;

  constructor(public unseenService: UnseenTubeService) {
    /* Variables setup */
    this.searchQuery = 'webdriver torso';
    this.lastSearchQuery = this.searchQuery;
    this.isSearching = false;
    this.maxViews = 500;
    this.publishedBefore = new Date().getFullYear() + 1;

    /* Makes a first search */
    this.performSearch();
  }

  ngOnInit() {
  }

  /**
   * Performs a search with the desired search type
   * If no type is supplied, SearchType.NEW_SEARCH is used
   * @param {SearchType} searchType
   */
  public performSearch(searchType?: SearchType) {
    this.isSearching = true;

    if (isUndefined(searchType)) {
      searchType = SearchType.NEW_SEARCH;
    }

    this.unseenService.performSearch(new UnseenTubeQuery(this.searchQuery, this.maxViews, this.publishedBefore, searchType))
      .subscribe(() => this.finishSearch());

    /* Updates the lastSearchQuery */
    this.lastSearchQuery = this.searchQuery;
  }

  /**
   * Performs a next page search
   */
  public nextPage() {
    this.performSearch(SearchType.NEXT_PAGE);
  }

  /**
   * Performs a previous page search
   */
  public previousPage() {
    this.performSearch(SearchType.PREVIOUS_PAGE);
  }

  /**
   * Method called when a search is finished
   */
  public finishSearch() {
    this.isSearching = false;


    /* Automatically go to next or previous page when necessary */
    if (this.unseenService.currentVideos.length === 0) {
      if (!isUndefined(this.unseenService.pageInfo.nextPageToken)) {
        this.nextPage();
      } else {
        /* TODO: Tell the user that no more results was found in the next page */
      }
    }
  }
}


