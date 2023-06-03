import { Component, OnInit } from '@angular/core';
import { ObjectivoGService } from 'src/app/services/objectivo-g.service';

@Component({
  selector: 'app-listar-objectivo-g',
  templateUrl: './listar-objectivo-g.component.html',
  styleUrls: ['./listar-objectivo-g.component.sass']
})
export class ListarObjectivoGComponent implements OnInit {

  TablaObjectivoG: any[] = [];
   
  constructor(private _objectivoGService: ObjectivoGService ) { 
  }

  ngOnInit(): void {
    this.obtenerObjectivoG();
  }

  BorrarObjectivoG(id: string){
    this._objectivoGService.BorrarObjectivoG(id).then(() =>{
      
    }).catch(error =>{
      console.log(error);
    })
  }


  obtenerObjectivoG(){
this._objectivoGService.obtenerObjectivoG().subscribe(data =>{
 this.TablaObjectivoG = [];
  data.forEach((element:any) => {
   this.TablaObjectivoG.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 });
  }


  


}
