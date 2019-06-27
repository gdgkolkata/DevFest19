import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Schedule } from 'src/app/shared/interfaces/schedule';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable, of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleResolver implements Resolve<Schedule[]> {
  constructor(private appService: AppService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Schedule[]> {
    return this.appService.getSchedule().pipe(
      take(1),
      catchError(err => of([]))
    );
  }
}
