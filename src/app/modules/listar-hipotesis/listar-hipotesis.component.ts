import { Component, OnInit } from '@angular/core';
import { HipotesisService } from 'src/app/services/hipotesis.service';

@Component({
  selector: 'app-listar-hipotesis',
  templateUrl: './listar-hipotesis.component.html',
  styleUrls: ['./listar-hipotesis.component.sass']
})
export class ListarHipotesisComponent implements OnInit {

  TablaHipotesis: any[] = [];
   
  constructor(private _hipotesisService: HipotesisService) { 
  }

  ngOnInit(): void {
    this.ObtenerHipotesis();
  }

  ObtenerHipotesis(){
this._hipotesisService.ObtenerHipotesis().subscribe(data =>{
 this.TablaHipotesis = [];
  data.forEach((element:any) => {
   this.TablaHipotesis.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
});
  }


  BorrarHipotesis(id: string){
    this._hipotesisService.BorrarHipotesis(id).then(() =>{
    }).catch(error =>{
      console.log(error);
    })
  }




}
