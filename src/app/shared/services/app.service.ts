import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Speaker } from '../interfaces/speaker';
import { Schedule } from '../interfaces/schedule';
import { Member } from '../interfaces/member';
import { Volunteer } from '../interfaces/volunteer';

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

  getSchedule() {
    return this.http.get(
      'https://sessionize.com/api/v2/flww2z1f/view/Grid?under=True',
      { responseType: 'text' }
    );
  }

  getTeam(): Observable<Member[]> {
    return this.http.get('assets/data/teams.json') as Observable<Member[]>;
  }

  getExteam(): Observable<Member[]> {
    return this.http.get('assets/data/exteams.json') as Observable<Member[]>;
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get('assets/data/volunteers.json') as Observable<Volunteer[]>;
  }
}
