import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private projectId: string;
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = `https://sessionize.com/api/v2/${env.projectId}/view`;
  }

  getSpeakers() {
    return this.http.get(`${this.endpoint}/speakers`);
  }
}
