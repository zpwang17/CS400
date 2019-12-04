import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Error} from 'tslint/lib/error';
import {catchError, timeout} from 'rxjs/internal/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7';
  names = '';
  result: string;


  query(): void {
    //  const api = 'https://www.maitube.com/ip/?ip=8.8.8.8';
    this.result = this.names;
  }


}
