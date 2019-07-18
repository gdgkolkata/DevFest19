import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionElement } from '../../interfaces/schedule';

@Component({
  selector: 'app-session-popup',
  templateUrl: './session-popup.component.html',
  styleUrls: ['./session-popup.component.scss']
})
export class SessionPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SessionElement) {}
}
