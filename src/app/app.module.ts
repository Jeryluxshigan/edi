import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainSiteComponent } from './main-site/main-site/main-site.component';
import { HeadderComponent } from './main-site/headder/headder.component';
import { FooterComponent } from './main-site/footer/footer.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { SidebarComponent } from './main-site/sidebar/sidebar.component';
import { OrderLinesComponent } from './main-site/order-lines/order-lines.component';








@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainSiteComponent,
    HeadderComponent,
    FooterComponent,
    SidebarComponent,
    OrderLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    NavigationModule,
    IndicatorsModule,
    IconsModule,
    InputsModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
