import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './header/home/home.component';
import { FeaturesComponent } from './header/features/features.component';
import { PricingComponent } from './header/pricing/pricing.component';
import { CaseStudiesComponent } from './header/case-studies/case-studies.component';
import { NotFoundComponent } from './header/not-found/not-found.component';
import { FirstModule } from "./main/first/first.module";
import { SecondModule } from './main/second/second.module';
import { MainModule } from './main/main.module';

import { ThirdModule } from './main/third/third.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    CaseStudiesComponent,
  
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    SecondModule,
    MainModule,
    ThirdModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
