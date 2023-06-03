import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';

import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreacionDeItemComponent } from './modules/creacion-de-item/creacion-de-item.component';
import { VerListaDeItemComponent } from './modules/ver-lista-de-item/ver-lista-de-item.component';
import { LoginComponent } from './modules/login/login.component';
import { VerListaDeRegistroAnteProyectoComponent } from './modules/ver-lista-de-registro-ante-proyecto/ver-lista-de-registro-ante-proyecto.component';
import { RegistroAnteProyectoComponent } from './modules/registro-ante-proyecto/registro-ante-proyecto.component';
import { DescripcionTemaComponent } from './modules/descripcion-tema/descripcion-tema.component';
import { ListarDescripcionTemaComponent } from './modules/listar-descripcion-tema/listar-descripcion-tema.component';
import { TodosComponentesComponent } from './modules/todos-componentes/todos-componentes.component';
import { ListarPlanteamientoComponent } from './modules/listar-planteamiento/listar-planteamiento.component';
import { PlanteamientopComponent } from './modules/planteamientop/planteamientop.component';
import { ListarHipotesisComponent } from './modules/listar-hipotesis/listar-hipotesis.component';
import { HipotesisComponent } from './modules/hipotesis/hipotesis.component';
import { ListarObjectivoGComponent } from './modules/listar-objectivo-g/listar-objectivo-g.component';
import { ObjectivoGComponent } from './modules/objectivo-g/objectivo-g.component';
import { ListarTituloGComponent } from './modules/listar-titulo-g/listar-titulo-g.component';
import { TituloGComponent } from './modules/titulo-g/titulo-g.component';
import { ListarJustificacionComponent } from './modules/listar-justificacion/listar-justificacion.component';
import { JustificacionComponent } from './modules/justificacion/justificacion.component';
import { ListarSugerenciaComponent } from './modules/listar-sugerencia/listar-sugerencia.component';
import { SugerenciaComponent } from './modules/sugerencia/sugerencia.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreacionDeItemComponent,
    VerListaDeItemComponent,
    LoginComponent,
    VerListaDeRegistroAnteProyectoComponent,
    RegistroAnteProyectoComponent,
    DescripcionTemaComponent,
    ListarDescripcionTemaComponent,
    TodosComponentesComponent,
    ListarPlanteamientoComponent,
    PlanteamientopComponent,
    ListarHipotesisComponent,
    HipotesisComponent,
    ListarObjectivoGComponent,
    ObjectivoGComponent,
    ListarTituloGComponent,
    TituloGComponent,
    ListarJustificacionComponent,
    JustificacionComponent,
    ListarSugerenciaComponent,
    SugerenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
