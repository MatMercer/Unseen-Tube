import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {UnseenTubeService} from './unseen-tube.service';
import {UnseenTubeQuery} from './unseen-tube-query.model';
import {UnseenTubeVideoService} from './unseen-tube-video/unseen-tube-video.service';


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

  constructor(private _unseeTubeService: UnseenTubeService) {
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

    this._unseeTubeService.performSearch(new UnseenTubeQuery(this.searchQuery, this.maxViews, this.publishedBefore))
      .subscribe((videos) => this.finishSearch(videos));

  }

  private finishSearch(videos) {
    this.isSearching = false;
    console.log(videos);
  }
}


