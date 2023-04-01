import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormularioComponent } from './page/formulario/formulario.component';
import { ExibicaoComponent } from './page/exibicao/exibicao.component';
import { SobrenosComponent } from './page/sobrenos/sobrenos.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { environment } from 'src/environments/environments';

import { FormupdateComponent } from './page/formupdate/formupdate.component';
import { LoginComponent } from './page/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    ExibicaoComponent,
    SobrenosComponent,
    HeaderComponent,
    FormupdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
