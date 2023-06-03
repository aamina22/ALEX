import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanteamientoService } from 'src/app/services/planteamiento.service';

@Component({
  selector: 'app-planteamientop',
  templateUrl: './planteamientop.component.html',
  styleUrls: ['./planteamientop.component.sass']
})
export class PlanteamientopComponent implements OnInit {
 
  TablaDescripcion: any[] = [];

  estado = false;
  Crearplanteamiento: FormGroup;
  TextoRecursivo = 'Agregar Planteamiento Problema';
  id: string | null;
    constructor(private fb: FormBuilder,
      private _planteamientoService:PlanteamientoService ,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.Crearplanteamiento = this.fb.group({
        planteamientoTema: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.Modificacion();
      this.VERIFICACION();
    
    }
  
    DosEstado(){
      this.estado = true;
      if(this.Crearplanteamiento.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarplanteamiento();
      }else{
        this.ModificarDescripcion(this.id);
      }
  }
  
  agregarplanteamiento(){
    const Objectoplanteamiento: any = {
      planteamientoTema: this.Crearplanteamiento.value.planteamientoTema,
      TimeFecha: new Date(),
      FechaModificacion: new Date()
  }
  this._planteamientoService.agregarPlanteamiento(Objectoplanteamiento).then(()=>{
       this.router.navigate(['/ListaPlanteamiento']);
    }).catch(error =>{
      console.log(error);
    })
  }
  
  
  ModificarDescripcion(id: string){
   const Objectoplanteamiento: any = {
    planteamientoTema: this.Crearplanteamiento.value.planteamientoTema,
    FechaModificacion: new Date()
  }
    this._planteamientoService.Actualizarplanteamiento(id, Objectoplanteamiento).then(() =>{
      this.router.navigate(['/ListaPlanteamiento']);
    })
  }
  
  
  
  Modificacion(){
    if(this.id !== null){
      this.TextoRecursivo = 'Editar El Planteamiento';
     this._planteamientoService.Obtenerplanteamiento(this.id).subscribe(data =>{
     this.Crearplanteamiento.setValue({
      planteamientoTema: data.payload.data()['planteamientoTema']
        
        })
      })
  }
  }

  VERIFICACION(){
    this._planteamientoService.VERIFICACION().subscribe(data =>{
     this.TablaDescripcion = [];
      data.forEach((element:any) => {
       this.TablaDescripcion.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    
    });
      }

  


}
