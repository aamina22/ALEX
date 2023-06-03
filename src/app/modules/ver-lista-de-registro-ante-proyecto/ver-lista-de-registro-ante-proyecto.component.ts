import { Component, OnInit } from '@angular/core';
import { RegistroAnteProyectoService } from 'src/app/services/registro-ante-proyecto.service';

@Component({
  selector: 'app-ver-lista-de-registro-ante-proyecto',
  templateUrl: './ver-lista-de-registro-ante-proyecto.component.html',
  styleUrls: ['./ver-lista-de-registro-ante-proyecto.component.sass']
})
export class VerListaDeRegistroAnteProyectoComponent implements OnInit {

  tablaRegistroAnteproyecto: any[] = [];
   
  constructor(private _registroAnteProyectoService: RegistroAnteProyectoService ) { 
  }

  ngOnInit(): void {
    this.ObtenerAnteproyecto();
  }

 

  borrarAnteproyecto(id: string){
    this._registroAnteProyectoService.borrarAnteproyecto(id).then(() =>{
     }).catch(error =>{
      console.log(error);
    })
  }


  ObtenerAnteproyecto(){
    this._registroAnteProyectoService.ObtenerAnteproyecto().subscribe(data =>{
     this.tablaRegistroAnteproyecto = [];
      data.forEach((element:any) => {
       this.tablaRegistroAnteproyecto.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    });
   }
    

}
