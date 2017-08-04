import {Component, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  transform(number: number) {
    /* From https://stackoverflow.com/a/2901298/7308020 */
    const otherNum = number.toString();
    return otherNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
