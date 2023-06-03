import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-creacion-de-item',
  templateUrl: './creacion-de-item.component.html',
  styleUrls: ['./creacion-de-item.component.sass']
})
export class CreacionDeItemComponent implements OnInit {
  verificacionCampos = false;
  crearItem: FormGroup;
  Titulorecursivo = 'Agregar un Items al la lista';
  id: null | string ;
  
    constructor(private fb: FormBuilder,
      private _itemService: ItemService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.crearItem = this.fb.group({
        nombreitem: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.modificacion();
    }
  
    DosFuncionesItem(){
      this.verificacionCampos = true;
      if(this.crearItem.invalid){
        return;
      }
      if(this.id ===null){
        this.llenaritem();
      }else{
        this.modificacionitem(this.id);
      }
  }
  
  llenaritem(){
    const item: any = {
      nombreitem: this.crearItem.value.nombreitem,
      Fechacreacion: new Date(),
      FechaDeModificacion: new Date()
  }
  
    this._itemService.agregarItem(item).then(()=>{
    this.router.navigate(['/Lista']);
    }).catch(error =>{
      console.log(error);
    })
  }
  
  
  modificacionitem(id: string){
   const item: any = {
      nombreitem: this.crearItem.value.nombreitem,
      FechaDeModificacion: new Date()
  }
    this._itemService.itemModificar(id, item).then(() =>{
      this.router.navigate(['/Lista']);
    })
  }
  
  
  
  modificacion(){
    if(this.id !== null){
      this.Titulorecursivo = 'Modificacion Del Item';
      this._itemService.obteneritem(this.id).subscribe(data =>{
        this.crearItem.setValue({
          nombreitem: data.payload.data()['nombreitem']
        })
      })
  }
  }
  


}
