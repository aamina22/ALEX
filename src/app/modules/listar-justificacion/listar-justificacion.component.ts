import { Component, OnInit } from '@angular/core';
import { JustificacionService } from 'src/app/services/justificacion.service';

@Component({
  selector: 'app-listar-justificacion',
  templateUrl: './listar-justificacion.component.html',
  styleUrls: ['./listar-justificacion.component.sass']
})
export class ListarJustificacionComponent implements OnInit {

  
  TablaJustificacion: any[] = [];
   
  constructor(private _justificacionService: JustificacionService ) { 
  }

  ngOnInit(): void {
    this.obtenerTituloG();
  }

  obtenerTituloG(){
this._justificacionService.obtenerTituloG().subscribe(data =>{
 this.TablaJustificacion = [];
  data.forEach((element:any) => {
   this.TablaJustificacion.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });

});
  }


  BorrarJustificacion(id: string){
    this._justificacionService.BorrarJustificacion(id).then(() =>{
    
    }).catch(error =>{
      console.log(error);
    })
  }


}
