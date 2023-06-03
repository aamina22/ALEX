import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DescripcionTemaService } from 'src/app/services/descripcion-tema.service';

@Component({
  selector: 'app-descripcion-tema',
  templateUrl: './descripcion-tema.component.html',
  styleUrls: ['./descripcion-tema.component.sass']
})
export class DescripcionTemaComponent implements OnInit {

  CrearDescripcionTema: FormGroup;
  estado = false;

id: string | null;
TextoRecursivo = 'Agregar Nueva Descripcion Del Tema';
  constructor(private fb: FormBuilder,
    private _descripcionTemaService: DescripcionTemaService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.CrearDescripcionTema = this.fb.group({
      
      descripcionTemas: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
    this.Modificacion();
  }

  DosEstado(){
   
    if(this.CrearDescripcionTema.invalid){
      return;
    }
    if(this.id ===null){
      this.agregardescripcionTema();
    }else{
      this.ModificarDescripcion(this.id);
    }
}

agregardescripcionTema(){
  const ObjectoDespcripcion: any = {
    descripcionTemas: this.CrearDescripcionTema.value.descripcionTemas,
    TimeFecha: new Date(),
    FechaModificacion: new Date()
}

  
  this._descripcionTemaService.agregarDescripcionTema(ObjectoDespcripcion).then(()=>{
   this.router.navigate(['/ListarDescripcion']);
  }).catch(error =>{
    console.log(error);
   })
}


ModificarDescripcion(id: string){
 const ObjectoDespcripcion: any = {
  descripcionTemas: this.CrearDescripcionTema.value.descripcionTemas,
    fechaActualizacion: new Date()
}
  this._descripcionTemaService.ActualizarDescripcionTema(id, ObjectoDespcripcion).then(() =>{
 this.router.navigate(['/ListarDescripcion']);
  })
}



Modificacion(){
  if(this.id !== null){
    this.TextoRecursivo = 'Editar Descripcion del Tema';
    this._descripcionTemaService.ObtenerLaDescripcion(this.id).subscribe(data =>{
    this.CrearDescripcionTema.setValue({
      descripcionTemas: data.payload.data()['descripcionTemas'] 
     
      })
    })
}
}




}
