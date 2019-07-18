import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  // @ViewChild('heroContent', { read: ElementRef, static: true })
  // heroContent: ElementRef;

  // constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.renderer.setStyle(
    //     this.heroContent.nativeElement,
    //     'background-color',
    //     'rgba(0, 0, 0, 0.6)'
    //   );
    // }, 0);
  }
}
