import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciosesiondocente',
    loadChildren: () => import('./pages/iniciosesiondocente/iniciosesiondocente.module').then( m => m.IniciosesiondocentePageModule)
  },
  {
    path: 'menualumno',
    loadChildren: () => import('./pages/menualumno/menualumno.module').then( m => m.MenualumnoPageModule)
  },
  {
    path: 'menudocente',
    loadChildren: () => import('./pages/menudocente/menudocente.module').then( m => m.MenudocentePageModule)
  },
  {
    path: 'qrgenerado',
    loadChildren: () => import('./pages/qrgenerado/qrgenerado.module').then( m => m.QrgeneradoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
