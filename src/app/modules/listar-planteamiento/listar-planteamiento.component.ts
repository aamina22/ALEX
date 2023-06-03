import { Component, OnInit } from '@angular/core';
import { PlanteamientoService } from 'src/app/services/planteamiento.service';

@Component({
  selector: 'app-listar-planteamiento',
  templateUrl: './listar-planteamiento.component.html',
  styleUrls: ['./listar-planteamiento.component.sass']
})
export class ListarPlanteamientoComponent implements OnInit {

  TablaPlanteamiento: any[] = [];
   
  constructor(private _planteamientoService: PlanteamientoService ) { 
  }

  ngOnInit(): void {
    this.Obtenerplanteamientos();
  }

  Obtenerplanteamientos(){
this._planteamientoService.Obtenerplanteamientos().subscribe(data =>{
 this.TablaPlanteamiento = [];
  data.forEach((element:any) => {
   this.TablaPlanteamiento.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });

});
  }


  Borrarplanteamiento(id: string){
    this._planteamientoService.Borrarplanteamiento(id).then(() =>{
      console.log('Producto eliminado exitosamente');
    }).catch(error =>{
      console.log(error);
    })
  }



}
