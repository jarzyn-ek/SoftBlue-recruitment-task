import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services-page/services.component';
import { ExperiencesPageComponent } from './experiences-page/experiences-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperiencesPageComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
