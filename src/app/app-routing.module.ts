import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'Builds', component: FirstComponentComponent },
  { path: '', redirectTo: '/Builds', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
