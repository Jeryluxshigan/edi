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
import { LinesSidebarComponent } from './sidebars/lines-sidebar/lines-sidebar.component';
import { ChargesSidebarComponent } from './sidebars/charges-sidebar/charges-sidebar.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { GenericEdiComponent } from './generic-edi/generic-edi.component';
import { GenericediSidebarComponent } from './sidebars/genericedi-sidebar/genericedi-sidebar.component';
import { RulesengineSidebarComponent } from './sidebars/rulesengine-sidebar/rulesengine-sidebar.component';
import { RulesEngineComponent } from './rules-engine/rules-engine.component';
import { GenericButtonContainerComponent } from './generic-button-container/generic-button-container.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';

















@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainSiteComponent,
    HeadderComponent,
    FooterComponent,
    LinesSidebarComponent,
    ChargesSidebarComponent,
    ButtonContainerComponent,
    OrderlistComponent,
    GenericEdiComponent,
    GenericediSidebarComponent,
    RulesengineSidebarComponent,
    RulesEngineComponent,
    GenericButtonContainerComponent,
    
   
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
    PopupModule,
    GridModule,
    DropDownsModule,
    DateInputsModule,
    ButtonsModule,
    LabelModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
