import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher
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
    this.navLinks.push({ label: 'blog', path: '/blog' });
  }

  ngOnInit() {
    this.isBreakpoint$ = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map(result => result.matches));
  }

  ngAfterViewInit() {
    this.scrollDispatcher.scrolled().subscribe((el: CdkScrollable) => {
      const completionPixel = 60;
      const offsetTop = el.measureScrollOffset('top');
      function calculateProperty(propFinalValue: number): number {
        const value = (offsetTop * propFinalValue) / completionPixel;
        return value > propFinalValue ? propFinalValue : value;
      }
      el.getElementRef().nativeElement.firstElementChild.setAttribute(
        'style',
        `background: rgba(255,255,255,${calculateProperty(1.0)}); box-shadow:` +
          `0 2px 04px -1px rgba(0,0,0,${calculateProperty(0.2)}), ` +
          `0 4px 05px  0   rgba(0,0,0,${calculateProperty(0.14)}), ` +
          `0 1px 10px  0   rgba(0,0,0,${calculateProperty(0.12)})`
      );
    });
  }
}
