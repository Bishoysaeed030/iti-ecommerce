// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

// Define your routes
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for Home
  { path: 'products', component: ProductListComponent }, // Route for Product List
  { path: '**', redirectTo: '' }, // Wildcard route to redirect to Home in case of an invalid route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
