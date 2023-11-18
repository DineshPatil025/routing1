import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProdsComponent } from './shared/components/prods/prods.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    title: "Nav-home",
  },
  {
    path: "home", component: HomeComponent,
    title: "home",

  },
  {
    path: "products", component: ProdsComponent,
    title: "Products",

  },
  {
    path: "users", component: UsersComponent,
    title: "Users",

  },
  {
    path: "add-prod", component: ProdFormComponent,
    title:"Add New Product"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
