import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HipotesisService } from 'src/app/services/hipotesis.service';

@Component({
  selector: 'app-hipotesis',
  templateUrl: './hipotesis.component.html',
  styleUrls: ['./hipotesis.component.sass']
})
export class HipotesisComponent implements OnInit {
  estado = false;
  CrearHipotesis: FormGroup;
  TextoRecursivo = 'Agregar Hipotesis';
  id: string | null;
  TablaPlanteamiento: any[] = [];
    constructor(private fb: FormBuilder,
      private _hipotesisService: HipotesisService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearHipotesis = this.fb.group({
        HipotesisTema: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.Modificacion();
      this.VERIFICACION();
    }
  
    DosEstado(){
      this.estado = true;
      if(this.CrearHipotesis.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarhipotesis();
      }else{
        this.ModificarHipotesis(this.id);
      }
  }
  
  Modificacion(){
    if(this.id !== null){
      this.TextoRecursivo = 'Editar Hipotesis';
     this._hipotesisService.Obtenerhipotesis(this.id).subscribe(data =>{
      this.CrearHipotesis.setValue({
        HipotesisTema: data.payload.data()['HipotesisTema'] 
        })
      })
  }
  }

  
  
  ModificarHipotesis(id: string){
    const ObjectoHipotesis: any = {
      HipotesisTema: this.CrearHipotesis.value.HipotesisTema,
      
       
      FechaModificacion: new Date()
  }
    this._hipotesisService.ActualizarHipotesis(id, ObjectoHipotesis).then(() =>{
      this.estado = false;
      this.router.navigate(['/ListarHipotesis']);
    })
  }
  
  
  agregarhipotesis(){
    const ObjectoHipotesis: any = {
      HipotesisTema: this.CrearHipotesis.value.HipotesisTema,
      TimeFecha: new Date(),
      FechaModificacion: new Date()
  }
  
  
    this._hipotesisService.agregarHipotesis(ObjectoHipotesis).then(()=>{
    this.router.navigate(['/ListarHipotesis']);
    }).catch(error =>{
      console.log(error);
     })
  }
  
  VERIFICACION(){
    this._hipotesisService.VERIFICACION().subscribe(data =>{
     this.TablaPlanteamiento = [];
      data.forEach((element:any) => {
       this.TablaPlanteamiento.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    
    });
      }
  



}
