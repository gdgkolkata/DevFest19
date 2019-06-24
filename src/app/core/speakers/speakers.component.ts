import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';
import { Speaker } from 'src/app/shared/interfaces/speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers$: Observable<Speaker[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.speakers$ = this.appService.getSpeakers();
  }
}
