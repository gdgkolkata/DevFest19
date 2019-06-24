import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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
export class AppComponent {
  siteName: string;
  navLinks: NavLink[];
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.siteName = 'GDG Kolkata DevFest 2019';
    this.createRoutes();
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));
  }

  private createRoutes() {
    this.navLinks = [];
    this.navLinks.push({ label: 'home', path: '/home' });
    this.navLinks.push({ label: 'speakers', path: '/speakers' });
    this.navLinks.push({ label: 'schedule', path: '/schedule' });
    this.navLinks.push({ label: 'team', path: '/team' });
    this.navLinks.push({ label: 'blog', path: '/blog' });
  }
}
