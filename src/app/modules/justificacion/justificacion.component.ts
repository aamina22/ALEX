import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JustificacionService } from 'src/app/services/justificacion.service';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.sass']
})
export class JustificacionComponent implements OnInit {

  id: string | null;
  CrearJustificacion: FormGroup;
  TablaTituloG  : any[] = [];
  TextoRecursivo = 'Agregar Justificacion';
  estado = false;



  constructor(private fb: FormBuilder,
    private _justificacionService: JustificacionService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.CrearJustificacion = this.fb.group({
      JustificacionTema: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
    this.Modificacion();
    this.VERIFICACION();
  }

  DosEstado(){
    this.estado = true;
    if(this.CrearJustificacion.invalid){
      return;
    }
    if(this.id ===null){
      this.agregartitulo();
    }else{
      this.ModificarJustificacion(this.id);
    }
}

agregartitulo(){
  const objectoJustificacion: any = {
    JustificacionTema: this.CrearJustificacion.value.JustificacionTema,
   
    TimeFecha: new Date(),
    FechaModificacion: new Date()
}

  
  this._justificacionService.agregarTituloG(objectoJustificacion).then(()=>{
 
    
    this.router.navigate(['/Listarjustificacion']);
  }).catch(error =>{
    console.log(error);
  
  })
}


ModificarJustificacion(id: string){
 
  const objectoJustificacion: any = {
    JustificacionTema: this.CrearJustificacion.value.JustificacionTema,
  
     
    FechaModificacion: new Date()
}
  this._justificacionService.ActualizarJustificacion(id, objectoJustificacion).then(() =>{
   
    this.router.navigate(['/ListarTitulo']);
  })
}

VERIFICACION(){
  this._justificacionService.VERIFICACION().subscribe(data =>{
   this.TablaTituloG = [];
    data.forEach((element:any) => {
     this.TablaTituloG.push({
     id: element.payload.doc.id,
     ...element.payload.doc.data()
     })
   });
  
  });
    }

Modificacion(){
  if(this.id !== null){
    this.TextoRecursivo = 'Editar Justificacion';
    
    this._justificacionService.obtenertitulo(this.id).subscribe(data =>{
     
      
      this.CrearJustificacion.setValue({
        JustificacionTema: data.payload.data()['Listarjustificacion']
      })
    })
}
}

}
