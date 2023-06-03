import { Component, OnInit } from '@angular/core';
import { SugerenciaService } from 'src/app/services/sugerencia.service';

@Component({
  selector: 'app-listar-sugerencia',
  templateUrl: './listar-sugerencia.component.html',
  styleUrls: ['./listar-sugerencia.component.sass']
})
export class ListarSugerenciaComponent implements OnInit {

  TablaSugerencia: any[] = [];
   
  constructor(private _sugerenciaService: SugerenciaService) { 
  }

  ngOnInit(): void {
    this.obtenerSugerencias();
  }

  BorrarSugerencia(id: string){
    this._sugerenciaService.BorrarSugerencia(id).then(() =>{
    
    }).catch(error =>{
      console.log(error);
    })
  }

  obtenerSugerencias(){
this._sugerenciaService.obtenerSugerencias().subscribe(data =>{
 this.TablaSugerencia = [];
  data.forEach((element:any) => {
   this.TablaSugerencia.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 
});
  }




}
