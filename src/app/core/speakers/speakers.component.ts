import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers$;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.speakers$ = this.appService.getSpeakers();
  }
}
