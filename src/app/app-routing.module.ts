import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionDeItemComponent } from './modules/creacion-de-item/creacion-de-item.component';
import { VerListaDeItemComponent } from './modules/ver-lista-de-item/ver-lista-de-item.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistroAnteProyectoComponent } from './modules/registro-ante-proyecto/registro-ante-proyecto.component';
import { VerListaDeRegistroAnteProyectoComponent } from './modules/ver-lista-de-registro-ante-proyecto/ver-lista-de-registro-ante-proyecto.component';
import { DescripcionTemaComponent } from './modules/descripcion-tema/descripcion-tema.component';
import { ListarDescripcionTemaComponent } from './modules/listar-descripcion-tema/listar-descripcion-tema.component';
import { TodosComponentesComponent } from './modules/todos-componentes/todos-componentes.component';
import { PlanteamientopComponent } from './modules/planteamientop/planteamientop.component';
import { ListarPlanteamientoComponent } from './modules/listar-planteamiento/listar-planteamiento.component';
import { HipotesisComponent } from './modules/hipotesis/hipotesis.component';
import { ListarHipotesisComponent } from './modules/listar-hipotesis/listar-hipotesis.component';
import { ObjectivoGComponent } from './modules/objectivo-g/objectivo-g.component';
import { ListarObjectivoGComponent } from './modules/listar-objectivo-g/listar-objectivo-g.component';
import { TituloGComponent } from './modules/titulo-g/titulo-g.component';
import { ListarTituloGComponent } from './modules/listar-titulo-g/listar-titulo-g.component';
import { JustificacionComponent } from './modules/justificacion/justificacion.component';
import { ListarJustificacionComponent } from './modules/listar-justificacion/listar-justificacion.component';
import { SugerenciaComponent } from './modules/sugerencia/sugerencia.component';
import { ListarSugerenciaComponent } from './modules/listar-sugerencia/listar-sugerencia.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:LoginComponent},
  {path: 'TodosLosComponentes', component:TodosComponentesComponent},
  
  {path: 'crearItem', component:CreacionDeItemComponent},
  {path: 'Lista',component:VerListaDeItemComponent},
  {path: 'editarproducto/:id', component:CreacionDeItemComponent},
  
  {path: 'RegitroAnteproyectos', component:RegistroAnteProyectoComponent},
  {path: 'LitarAnteProyectos', component: VerListaDeRegistroAnteProyectoComponent},
  {path: 'editarAnteproyectoRegistrado/:id', component:RegistroAnteProyectoComponent},
  
  {path: 'CrearDescripcionTema', component: DescripcionTemaComponent},
  {path: 'ListarDescripcion', component: ListarDescripcionTemaComponent},
  {path: 'EditarDescripcion/:id', component:DescripcionTemaComponent},
  
  {path: 'PlanteamientoProblema', component:PlanteamientopComponent},
  {path: 'ListaPlanteamiento', component:ListarPlanteamientoComponent},
  {path: 'EditarPlanteamiento/:id', component: PlanteamientopComponent},
  
  {path: 'Hipotesis', component: HipotesisComponent},
  {path: 'ListarHipotesis', component: ListarHipotesisComponent},
  {path: 'EditarHipotesis/:id', component: HipotesisComponent},
  
  {path: 'Objectivo', component: ObjectivoGComponent},
  {path: 'ListarObjectivo', component: ListarObjectivoGComponent},
  {path: 'EditarObjectivo/:id', component: ObjectivoGComponent},
  
  {path: 'Titulo', component:TituloGComponent},
  {path:'ListarTitulo', component:ListarTituloGComponent},
  {path: 'EditarTitulo/:id', component:TituloGComponent},

  {path: 'Justificacion', component: JustificacionComponent},
  {path: 'Listarjustificacion', component:ListarJustificacionComponent},
  {path: 'Editarjustificacion/:id', component: JustificacionComponent},

  {path: 'sugerencias', component: SugerenciaComponent},
  {path: 'ListarSugerencias', component: ListarSugerenciaComponent},
  {path: 'EditarSugerencias/:id', component: SugerenciaComponent},


  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }