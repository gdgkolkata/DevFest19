import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements AfterViewInit {
  @Output() appDeferLoad = new EventEmitter<void>();
  private intersectionObserver: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries =>
      this.checkForIntersection(entries)
    );
    this.intersectionObserver.observe(this.element.nativeElement as Element);
  }

  private checkForIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.appDeferLoad.emit();
        this.intersectionObserver.unobserve(this.element
          .nativeElement as Element);
        this.intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}
