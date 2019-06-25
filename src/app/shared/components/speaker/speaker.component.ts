import { Component, Input } from '@angular/core';
import { Speaker } from '../../interfaces/speaker';
import { fade } from '../../animations/animations';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
  animations: [fade]
})
export class SpeakerComponent {
  @Input() speaker: Speaker;
  showImg: boolean;

  loadImg() {
    this.showImg = true;
  }
}
