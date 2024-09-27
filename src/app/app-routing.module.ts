import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { FeaturesComponent } from './header/features/features.component';
import { NotFoundComponent } from './header/not-found/not-found.component';
import { PricingComponent } from './header/pricing/pricing.component';
import { CaseStudiesComponent } from './header/case-studies/case-studies.component';
import { ContactComponent } from './header/contact/contact.component';

const routes: Routes = [
  {path : 'home',component:HomeComponent},
  {path : 'features',component:FeaturesComponent},
  {path : 'pricing',component:PricingComponent},
  {path : 'case-studies',component:CaseStudiesComponent},
  {path : 'contact',component:ContactComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : '**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
