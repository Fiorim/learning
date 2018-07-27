import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DropsComponent } from './drops/drops.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'drops' },
  { path: 'drops', component: DropsComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: '**', component: DropsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent];
