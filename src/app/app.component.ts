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
@Pipe({name: 'safeUrl'})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Pipe({name: 'safeStyle'})
export class SafeStylePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustStyle(url);
  }
}

@Pipe({name: 'prettyNumber'})
export class PrettyNumberPipe implements PipeTransform {
  transform(number) {
    /* From https://stackoverflow.com/a/2901298/7308020 */
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
