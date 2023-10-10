import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainSiteComponent } from './main-site/main-site/main-site.component';
import { LinesSidebarComponent } from './sidebars/lines-sidebar/lines-sidebar.component';
import { ChargesSidebarComponent } from './sidebars/charges-sidebar/charges-sidebar.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { GenericEdiComponent } from './generic-edi/generic-edi.component';
import { GenericediSidebarComponent } from './sidebars/genericedi-sidebar/genericedi-sidebar.component';
import { RulesengineSidebarComponent } from './sidebars/rulesengine-sidebar/rulesengine-sidebar.component';
import { RulesEngineComponent } from './rules-engine/rules-engine.component';
import { GenericButtonContainerComponent } from './generic-button-container/generic-button-container.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:  LandingPageComponent},
  { path: 'main-site', component: MainSiteComponent },
  { path: 'lines-sidebar', component: LinesSidebarComponent },
  { path: 'charges-sidebar', component: ChargesSidebarComponent  },
  { path: 'button-container', component: ButtonContainerComponent },
  { path: 'orderlist', component: OrderlistComponent },
  { path: 'generic-edi', component: GenericEdiComponent  },
  { path: 'genericedi-sidebar', component: GenericediSidebarComponent  },
  { path: 'rules-engine', component: RulesEngineComponent },
  { path: 'rulesengine-sidebar', component: RulesengineSidebarComponent  },
  { path: 'generic-button-container', component:  GenericButtonContainerComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
