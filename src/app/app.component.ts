import {Pipe, PipeTransform, Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


/* From https://stackoverflow.com/a/38037914/7308020 */
@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Pipe({name: 'prettyNumber'})
export class PrettyNumberPipe implements PipeTransform {
  transform(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
