import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  @Input() volunteer = {
    name: 'Rivu Chakrabarty',
    teams: ['On Ground', 'App'],
    linkedin: 'https://twitter.com/rivuchakraborty',
    slack: 'https://www.linkedin.com/in/rivuchk/'
  };
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('slack', sanitizer.bypassSecurityTrustResourceUrl('assets/img/social/slack.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/img/social/linkedin.svg'));
    // iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/img/social/github.svg'));
  }

  ngOnInit() {}
}
