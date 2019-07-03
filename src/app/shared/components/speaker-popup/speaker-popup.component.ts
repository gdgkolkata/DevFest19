import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Speaker } from '../../interfaces/speaker';

@Component({
  selector: 'app-speaker-popup',
  templateUrl: './speaker-popup.component.html',
  styleUrls: ['./speaker-popup.component.scss']
})
export class SpeakerPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Speaker) {}
}
