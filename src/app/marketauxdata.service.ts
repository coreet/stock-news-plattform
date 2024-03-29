import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarketauxDataService {
  public data: any;
  constructor(private http: HttpClient) {}

  getData(stocks?: any): Observable<any> {
    const req = stocks?.length > 0 ? stocks.join(',') : stocks;
    return this.http.get(
      `https://api.marketaux.com/v1/news/all?symbols=${req}&filter_entities=true&language=en&api_token=0AyycK0EplYgPAAYINIIT4sNiX2KkhxvJkUUCMwM`
    );
  }
}
