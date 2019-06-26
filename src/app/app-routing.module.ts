import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SpeakersComponent } from './core/speakers/speakers.component';
import { ScheduleComponent } from './core/schedule/schedule.component';
import { TeamComponent } from './core/team/team.component';
import { BlogComponent } from './core/blog/blog.component';
import { ScheduleResolver } from './core/schedule/schedule.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'schedule', component: ScheduleComponent, resolve: { schedule: ScheduleResolver } },
  { path: 'team', component: TeamComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
