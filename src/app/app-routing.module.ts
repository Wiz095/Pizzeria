import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./nav-pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./nav-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./nav-pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./Food/pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'burger',
    loadChildren: () => import('./Food/burger/burger.module').then( m => m.BurgerPageModule)
  },
  {
    path: 'wings',
    loadChildren: () => import('./Food/wings/wings.module').then( m => m.WingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
