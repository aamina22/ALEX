import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SugerenciaService } from 'src/app/services/sugerencia.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.sass']
})
export class SugerenciaComponent implements OnInit {
  TextoRecursivo = 'Agregar Sugerencia';
  CrearSugerencia: FormGroup;
  id: string | null;
  estado = false;

  
    constructor(private fb: FormBuilder,
      private _sugerenciaService: SugerenciaService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearSugerencia = this.fb.group({
        SugerenciaTema: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.Modificacion();
    }
  
    DosEstado(){
      this.estado = true;
      if(this.CrearSugerencia.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarsugerencia();
      }else{
        this.ModificarSugerencia(this.id);
      }
  }
  ModificarSugerencia(id: string){
   
    const objectoSugerencia: any = {
      SugerenciaTema: this.CrearSugerencia.value.SugerenciaTema,
      
       
      FechaModificacion: new Date()
  }
    this._sugerenciaService.ActualizarSugerencia(id, objectoSugerencia).then(() =>{
    
      this.router.navigate(['/ListarSugerencias']);
    })
  }
  
  Modificacion(){
    if(this.id !== null){
      this.TextoRecursivo = 'Editar Sugerencias';
     
      this._sugerenciaService.obtenersugerencia(this.id).subscribe(data =>{
      
      
        this.CrearSugerencia.setValue({
          SugerenciaTema: data.payload.data()['SugerenciaTema']
        })
      })
  }
  }
  

  
  
 
  
  
  
  
  agregarsugerencia(){
    const objectoSugerencia: any = {
      SugerenciaTema: this.CrearSugerencia.value.SugerenciaTema,
   
      TimeFecha: new Date(),
      FechaModificacion: new Date()
  }
  
   
    this._sugerenciaService.agregarSugerencia(objectoSugerencia).then(()=>{
      
      this.router.navigate(['/ListarSugerencias']);
    }).catch(error =>{
      console.log(error);
    
    })
  }


}
