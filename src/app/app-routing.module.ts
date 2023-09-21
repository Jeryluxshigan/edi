import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainSiteComponent } from './main-site/main-site/main-site.component';
import { SidebarComponent } from './main-site/sidebar/sidebar.component';
import { OrderLinesComponent } from './main-site/order-lines/order-lines.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:  LandingPageComponent},
  { path: 'main-site', component: MainSiteComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'order-lines', component: OrderLinesComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
