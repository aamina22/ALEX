import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectivoGService } from 'src/app/services/objectivo-g.service';

@Component({
  selector: 'app-objectivo-g',
  templateUrl: './objectivo-g.component.html',
  styleUrls: ['./objectivo-g.component.sass']
})
export class ObjectivoGComponent implements OnInit {

  id: string | null;
  TextoRecursivo = 'Agregar Objectivo';
  estado = false;
  TablaHipotesis: any[] = [];
  CrearObjectivoG: FormGroup;

 
  
    constructor(private fb: FormBuilder,
      private _objectivoGService: ObjectivoGService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearObjectivoG = this.fb.group({
        ObjectivoGTema: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.Modificacion();
      this.VERIFICACION();
    }
  
    DosEstado(){
      this.estado = true;
      if(this.CrearObjectivoG.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarobjectivoG();
      }else{
        this.ModificarObjectivoG(this.id);
      }
  }
  
  agregarobjectivoG(){
    const ObjectoObjectivoG: any = {
      ObjectivoGTema: this.CrearObjectivoG.value.ObjectivoGTema,
      TimeFecha: new Date(),
      FechaModificacion: new Date()
  }
  this._objectivoGService.agregarObjectivoG(ObjectoObjectivoG).then(()=>{
      this.router.navigate(['/ListarObjectivo']);
    }).catch(error =>{
      console.log(error);
     
    })
  }
  
  
  ModificarObjectivoG(id: string){
    const ObjectoObjectivoG: any = {
      ObjectivoGTema: this.CrearObjectivoG.value.ObjectivoGTema,
      FechaModificacion: new Date()
  }
    this._objectivoGService.ActualizarObjectivoG(id, ObjectoObjectivoG).then(() =>{
    this.router.navigate(['/ListarObjectivo']);
    })
  }
  
  
  
  Modificacion(){
    if(this.id !== null){
      this.TextoRecursivo = 'Editar Objectivo General';
     
      this._objectivoGService.obtenerobjectivog(this.id).subscribe(data =>{
        this.CrearObjectivoG.setValue({
          ObjectivoGTema: data.payload.data()['ObjectivoGTema']
      
        })
      })
  }
  }


  VERIFICACION(){
    this._objectivoGService.VERIFICACION().subscribe(data =>{
     this.TablaHipotesis = [];
      data.forEach((element:any) => {
       this.TablaHipotesis.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    
    });
      }
  
  

}
