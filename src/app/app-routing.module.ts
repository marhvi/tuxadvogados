import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExibicaoComponent } from './page/exibicao/exibicao.component';
import { FormularioComponent } from './page/formulario/formulario.component';

import { HomeComponent } from './page/home/home.component';
import { SobrenosComponent } from './page/sobrenos/sobrenos.component';
import { FormupdateComponent } from './page/formupdate/formupdate.component';
import { LoginComponent } from './page/login/login.component';
import { RouterGuard } from './guardRouters/router.guard';
import { LoginGuard } from './guardRouters/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [RouterGuard] },
  {path: 'exibicao', component: ExibicaoComponent, canActivate: [RouterGuard]},
  {path: 'form', component: FormularioComponent, canActivate: [RouterGuard] },
  {path: 'sobre', component: SobrenosComponent, canActivate: [RouterGuard] },
  {path: 'update/:id', component: FormupdateComponent},
  {path: '', component: LoginComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
