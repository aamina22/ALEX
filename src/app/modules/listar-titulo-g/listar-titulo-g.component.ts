import { Component, OnInit } from '@angular/core';
import { TituloGService } from 'src/app/services/titulo-g.service';

@Component({
  selector: 'app-listar-titulo-g',
  templateUrl: './listar-titulo-g.component.html',
  styleUrls: ['./listar-titulo-g.component.sass']
})
export class ListarTituloGComponent implements OnInit {
  TablaTituloG: any[] = [];
   
  constructor(private _tituloGService: TituloGService ) { 
  }

  ngOnInit(): void {
    this.obtenerTituloG();
  }

  obtenerTituloG(){
this._tituloGService.obtenerTituloG().subscribe(data =>{
 this.TablaTituloG = [];
  data.forEach((element:any) => {
   this.TablaTituloG.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });

});
  }


  BorrarTituloG(id: string){
    this._tituloGService.BorrarTituloG(id).then(() =>{
   
    }).catch(error =>{
      console.log(error);
    })
  }

}
