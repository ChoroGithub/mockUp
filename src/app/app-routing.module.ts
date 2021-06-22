import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { AppComponent } from './app.component';
import { CampagneInfoComponent } from './campagne-info/campagne-info.component';
import { InfluenceComponent } from './influence/influence.component';
import { MainComponent } from './main/main.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'campagne', component: CampagneInfoComponent },
  { path: 'product', component: ProductInfoComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'influence', component: InfluenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }