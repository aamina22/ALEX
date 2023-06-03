import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TituloGService } from 'src/app/services/titulo-g.service';

@Component({
  selector: 'app-titulo-g',
  templateUrl: './titulo-g.component.html',
  styleUrls: ['./titulo-g.component.sass']
})
export class TituloGComponent implements OnInit {
  estado = false;
  CrearTituloG: FormGroup;
  
  TablaObjectivoG : any[] = [];
 
  TextoRecursivo = 'Agregar Titulo';
  id: string | null;
    constructor(private fb: FormBuilder,
      private _tituloGService: TituloGService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearTituloG = this.fb.group({
        TituloGTema: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.Modificacion();
      this.VERIFICACION();
    }
  
    DosEstado(){
      this.estado = true;
      if(this.CrearTituloG.invalid){
        return;
      }
      if(this.id ===null){
        this.agregartitulo();
      }else{
        this.ModificarTituloG(this.id);
      }
  }
  
  agregartitulo(){
    const ObjectoTituloG: any = {
      TituloGTema: this.CrearTituloG.value.TituloGTema,
      TimeFecha: new Date(),
      FechaModificacion: new Date()
  }
   this._tituloGService.agregarTituloG(ObjectoTituloG).then(()=>{
     
      this.router.navigate(['/ListarTitulo']);
    }).catch(error =>{
      console.log(error);
   
    })
  }


  VERIFICACION(){
    this._tituloGService.VERIFICACION().subscribe(data =>{
     this.TablaObjectivoG = [];
      data.forEach((element:any) => {
       this.TablaObjectivoG.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    
    });
      }
  
  
  ModificarTituloG(id: string){

    const ObjectoTituloG: any = {
      TituloGTema: this.CrearTituloG.value.TituloGTema,
     
       
      FechaModificacion: new Date()
  }
    this._tituloGService.ActualizarTituloG(id, ObjectoTituloG).then(() =>{
     
      this.router.navigate(['/ListarTitulo']);
    })
  }
  
  
  
  Modificacion(){
    if(this.id !== null){
      this.TextoRecursivo = 'Editar Titulo';
    
      this._tituloGService.obtenertitulo(this.id).subscribe(data =>{
        
        this.CrearTituloG.setValue({
          TituloGTema: data.payload.data()['TituloGTema']
        })
      })
  }
  }
  

}
