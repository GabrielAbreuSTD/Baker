import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SalvarUsuarioPage} from './usuario/salvar-usuario/salvar-usuario.page';
import { UsuarioListarComponent} from './usuario/usuario-listar/usuario-listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-usuario', component: SalvarUsuarioPage},
  { path: 'usuario-listar', component: UsuarioListarComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
