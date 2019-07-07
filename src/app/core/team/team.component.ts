import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/interfaces/member';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';
import { Volunteer } from 'src/app/shared/interfaces/volunteer';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: Observable<Member[]>;
  volunteers: Observable<Volunteer[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.team = this.appService.getTeam();
    this.volunteers = this.appService.getVolunteers();
  }
}
