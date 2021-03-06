import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {UnseenTubeService} from './unseen-tube.service';
import {SearchType, SortingType, UnseenTubeQuery} from './unseen-tube-search.model';
import {UnseenTubeVideoCollectionService} from './unseen-tube-video-collection/unseen-tube-video-collection.service';
import {isUndefined} from 'util';


@Component({
  selector: 'app-unseen-tube',
  templateUrl: './unseen-tube.component.html',
  styleUrls: ['./unseen-tube.component.css'],
  providers: [UnseenTubeService, UnseenTubeVideoCollectionService]
})
export class UnseenTubeComponent implements OnInit {
  unseenTubeQuery: UnseenTubeQuery;
  lastSearchQuery: string;
  isSearching: boolean;
  sortingType = SortingType;

  constructor(public unseenService: UnseenTubeService) {
    /* Variables setup */
    this.unseenTubeQuery = new UnseenTubeQuery();
    this.unseenTubeQuery.searchQuery = 'webdriver torso';
    this.lastSearchQuery = this.unseenTubeQuery.searchQuery;
    this.isSearching = false;
    this.unseenTubeQuery.maxViews = 500;
    this.unseenTubeQuery.publishedBefore = new Date().getFullYear() + 1;
    this.unseenTubeQuery.sortMode = this.sortingType.ASCENDING;

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
      this.unseenTubeQuery.searchType = SearchType.NEW_SEARCH;
    } else {
      this.unseenTubeQuery.searchType = searchType;
    }

    this.unseenService.performSearch(this.unseenTubeQuery)
      .subscribe(() => this.finishSearch());

    /* Updates the lastSearchQuery */
    this.lastSearchQuery = this.unseenTubeQuery.searchQuery;
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

    /* TODO: Maybe implement an auto search */
  }
}


