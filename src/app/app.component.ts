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
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
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
  private isHome: boolean;
  @ViewChild('topBar', { read: ElementRef, static: true }) topBarEl: ElementRef;
  topBar: MatToolbar;
  @ViewChild('homeLink', { read: ElementRef, static: false }) homeLinkEl: ElementRef;
  homeLink: HTMLAnchorElement;
  isHomeLinkHidden: boolean;

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
    this.topBar = this.topBarEl.nativeElement;
    this.router.events
      .pipe(
        filter((x: RouterEvent) => x instanceof NavigationEnd),
        map((y: NavigationEnd) => y.urlAfterRedirects === '/home')
      )
      .subscribe(val => {
        this.isHome = val;
        this.isHomeLinkHidden = val;
        const colorCode = this.isHome ? 255 : 0;
        this.renderer.setAttribute(
          this.topBar,
          'style',
          `color: rgba(${colorCode},${colorCode},${colorCode},0.87)`
        );
      });
    this.isBreakpoint$ = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map(result => result.matches));
  }

  ngAfterViewInit() {
    this.homeLink = this.homeLinkEl.nativeElement;
    const completionPixel = 60;
    this.scrollDispatcher
      .scrolled()
      .pipe(
        map((el: CdkScrollable) => {
          const offsetTop = el.measureScrollOffset('top');
          const calcProp = (propFinalValue: number) =>
            offsetTop >= completionPixel ? propFinalValue : 0;
          // function calculateProperty(propFinalValue: number): number {
          //   const value = (offsetTop * propFinalValue) / completionPixel;
          //   return value > propFinalValue ? propFinalValue : value;
          // }
          const background = `background: rgba(255,255,255,${calcProp(1)});`;
          let color = '';
          let colorCode = 255;
          if (this.isHome) {
            colorCode = 255 - calcProp(255);
            color = `color: rgba(${colorCode},${colorCode},${colorCode},0.87);`;
          }
          const boxShadow =
            'box-shadow: ' +
            `0 2px 04px -1px rgba(0,0,0,${calcProp(0.2)}), ` +
            `0 4px 05px  0   rgba(0,0,0,${calcProp(0.14)}), ` +
            `0 1px 10px  0   rgba(0,0,0,${calcProp(0.12)})`;
          return {
            isHomeLinkHidden: colorCode === 255,
            style: `${background}${color}${boxShadow}`
          };
        }),
        distinctUntilChanged((x, y) => x.style === y.style)
      )
      .subscribe(({isHomeLinkHidden, style}) => {
        if (this.isHome) {
          this.isHomeLinkHidden = isHomeLinkHidden;
          if (this.isHomeLinkHidden) {
            this.renderer.addClass(this.homeLink, 'no-logo');
          } else {
            this.renderer.removeClass(this.homeLink, 'no-logo');
          }
        }
        this.renderer.setAttribute(this.topBar, 'style', style);
      });
  }
}
