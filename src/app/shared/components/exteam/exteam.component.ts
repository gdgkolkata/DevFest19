import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Member } from '../../interfaces/member';

@Component({
  selector: 'app-exteam',
  templateUrl: './exteam.component.html',
  styleUrls: ['./exteam.component.scss']
})
export class ExteamComponent implements OnInit {

  @Input() exmember: Member;
  imageLocation = 'https://github.com/xprilion/random-storage/raw/master/gdg/';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/img/social/twitter.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/img/social/linkedin.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/img/social/github.svg'));
  }

  ngOnInit() {}
}
