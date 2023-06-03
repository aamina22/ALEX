import { Component, OnInit } from '@angular/core';
import { DescripcionTemaService } from 'src/app/services/descripcion-tema.service';

@Component({
  selector: 'app-listar-descripcion-tema',
  templateUrl: './listar-descripcion-tema.component.html',
  styleUrls: ['./listar-descripcion-tema.component.sass']
})
export class ListarDescripcionTemaComponent implements OnInit {

  TablaDescripcion: any[] = [];
   
  constructor(private _descripcionTemaService: DescripcionTemaService ) { 
  }

  ngOnInit(): void {
    this.ObtenerLaDescripcionTema();
  }

  BorrarDescripcionTema(id: string){
    this._descripcionTemaService.BorrarDescripcionTema(id).then(() =>{
     }).catch(error =>{
      console.log(error);
    })
  }


  ObtenerLaDescripcionTema(){
this._descripcionTemaService.ObtenerLaDescripcionTema().subscribe(data =>{
 this.TablaDescripcion = [];
  data.forEach((element:any) => {
   this.TablaDescripcion.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 
});
  }


 
  

}
