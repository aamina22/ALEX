import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-ver-lista-de-item',
  templateUrl: './ver-lista-de-item.component.html',
  styleUrls: ['./ver-lista-de-item.component.sass']
})
export class VerListaDeItemComponent implements OnInit {

  tablaitems: any[] = [];
   
  constructor(private _itemService: ItemService ) { 
  }

  ngOnInit(): void {
    this.obtenerItems();
  }

  obtenerItems(){
this._itemService.obtenerItems().subscribe(data =>{
 this.tablaitems = [];
  data.forEach((element:any) => {
   this.tablaitems.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
});
  }


  itemEliminar(id: string){
    this._itemService.itemEliminar(id).then(() =>{
    }).catch(error =>{
      console.log(error);
    })
  }

 
}
