import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
   
    redirectTo: 'home',
    
    pathMatch: 'full'
  },{
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },{
    path: 'ai-list',
    loadChildren: () => import('./pages/ai-list/ai-list.module').then(m => m.AiListModule)
  },
  {
    path: 'ai-detail/:_id',
    loadChildren: () => import('./pages/ai-detail/ai-detail.module').then(m => m.AiDetailModule)
  },{
    path: 'dev-list',
    loadChildren: () => import('./pages/dev-list/dev-list.module').then(m => m.DevListModule)
  },{
    path: 'dev-detail/:_id',
    loadChildren: () => import('./pages/dev-detail/dev-detail.module').then(m => m.DevDetailModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
