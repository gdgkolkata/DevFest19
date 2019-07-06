import {
  Component,
  OnInit,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  siteName: string;
  navLinks: NavLink[];
  isBreakpoint$: Observable<boolean>;
  @ViewChild('topBar', { read: ElementRef, static: true }) topBarEl: ElementRef;
  topBar: MatToolbar;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private renderer: Renderer2
  ) {
    this.siteName = 'GDG Kolkata DevFest 2019';
    this.createRoutes();
  }

  private createRoutes() {
    this.navLinks = [];
    this.navLinks.push({ label: 'home', path: '/home' });
    this.navLinks.push({ label: 'speakers', path: '/speakers' });
    this.navLinks.push({ label: 'schedule', path: '/schedule' });
    this.navLinks.push({ label: 'team', path: '/team' });
  }

  ngOnInit() {
    this.topBar = this.topBarEl.nativeElement;
    this.isBreakpoint$ = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map(result => result.matches));
  }

  ngAfterViewInit() {
    const completionPixel = 60;
    this.scrollDispatcher
      .scrolled()
      .pipe(
        map((el: CdkScrollable) => {
          const offsetTop = el.measureScrollOffset('top');
          const calcProp = (propFinalValue: number) =>
            offsetTop >= completionPixel ? propFinalValue : 0;
          const boxShadow =
            'box-shadow: ' +
            `0 2px 04px -1px rgba(0,0,0,${calcProp(0.2)}), ` +
            `0 4px 05px  0   rgba(0,0,0,${calcProp(0.14)}), ` +
            `0 1px 10px  0   rgba(0,0,0,${calcProp(0.12)})`;
          return boxShadow;
        }),
        distinctUntilChanged()
      )
      .subscribe(style =>
        this.renderer.setAttribute(this.topBar, 'style', style)
      );
  }
}
