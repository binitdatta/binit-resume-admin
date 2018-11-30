import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersummaryComponent } from './careersummary/careersummary.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'careersummary', component: CareersummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
