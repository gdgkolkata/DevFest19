import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { Router, RouterEvent, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

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
  isHome: boolean;
  isNavigating: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private renderer: Renderer2,
    private router: Router
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
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.isNavigating = true;
      } else if (routerEvent instanceof NavigationEnd) {
        this.isNavigating = false;
      }
    });
    this.router.events
      .pipe(
        filter((x: RouterEvent) => x instanceof NavigationEnd),
        map(y => y.url === '/home')
      )
      .subscribe(val => (this.isHome = val));
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
          function calculateProperty(propFinalValue: number): number {
            const value = (offsetTop * propFinalValue) / completionPixel;
            return value > propFinalValue ? propFinalValue : value;
          }
          const background = `background: rgba(255,255,255,${calculateProperty(1)})`;
          const boxShadow =
            'box-shadow: ' +
            `0 2px 04px -1px rgba(0,0,0,${calculateProperty(0.2)}), ` +
            `0 4px 05px  0   rgba(0,0,0,${calculateProperty(0.14)}), ` +
            `0 1px 10px  0   rgba(0,0,0,${calculateProperty(0.12)})`;
          return {
            style: `${background};${boxShadow}`,
            topBar: el.getElementRef().nativeElement.firstElementChild
          };
        }),
        distinctUntilChanged((x, y) => x.style === y.style)
      )
      .subscribe(({ style, topBar }) => this.renderer.setAttribute(topBar, 'style', style));
  }
}
