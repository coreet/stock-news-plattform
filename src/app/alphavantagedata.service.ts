import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlphavantageDataSerivce {
  public data: any;
  constructor(private http: HttpClient) {}

  getData(stocks?: any): Observable<any> {
    return this.http.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stocks}&apikey=GESK7EZP4Z8JCUTC`
    );
  }
}
