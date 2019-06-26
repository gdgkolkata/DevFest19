import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Speaker } from '../interfaces/speaker';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = `https://sessionize.com/api/v2/${env.projectId}/view`;
  }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get(`${this.endpoint}/speakers`) as Observable<Speaker[]>;
  }
}
