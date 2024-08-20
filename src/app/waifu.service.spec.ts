import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaifuService {

  private apiUrl = 'https://api.waifu.im/search';  // Actual API endpoint URL

  constructor(private http: HttpClient) { }

  searchWaifus(tags: string[]): Observable<any> {
    let params = new HttpParams();

    // Join tags with a comma, assuming this is the required format
    const joinedTags = tags.join(',');

    // Set the 'included_tags' parameter
    params = params.set('included_tags', joinedTags);

    // Send request to the API
    return this.http.get(this.apiUrl, { params });
  }
}
