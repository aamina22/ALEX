import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroAnteProyectoService } from 'src/app/services/registro-ante-proyecto.service';

@Component({
  selector: 'app-registro-ante-proyecto',
  templateUrl: './registro-ante-proyecto.component.html',
  styleUrls: ['./registro-ante-proyecto.component.sass']
})
export class RegistroAnteProyectoComponent implements OnInit {

  Titulorecursivo = 'Agregar Registro de Anteproyecto';
  id: string | null;
  verificacionCampos = false;
  crearRegistroAnteProyecto: FormGroup;
  
  
    constructor(private fb: FormBuilder,
      private _registroAnteProyectoService: RegistroAnteProyectoService,
      private aRoute: ActivatedRoute,
      private router: Router
      ) {
      this.crearRegistroAnteProyecto = this.fb.group({
        nombreAnteproyecto: ['', Validators.required],
        DescripcionAnteproyecto: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
     }
  
    ngOnInit(): void {
      this.modificar();
    }

    modificar(){
      if(this.id !== null){
        this.Titulorecursivo = 'Editar Anteproyecto';
        this._registroAnteProyectoService.obtenerAnteproyecto(this.id).subscribe(data =>{
         this.crearRegistroAnteProyecto.setValue({
            nombreAnteproyecto: data.payload.data()['nombreAnteproyecto'], 
            DescripcionAnteproyecto: data.payload.data()['DescripcionAnteproyecto']
          })
        })
    }
    }
  
    DosFuncionesAnteproyecto(){
      this.verificacionCampos = true;
      if(this.crearRegistroAnteProyecto.invalid){
        return;
      }
      if(this.id ===null){
        this.anadiranteproyecto();
      }else{
        this.modificarAnteproyecto(this.id);
      }
  }
  

  

 
  modificarAnteproyecto(id: string){
    const objectoAnteproyecto: any = {
      nombreAnteproyecto: this.crearRegistroAnteProyecto.value.nombreAnteproyecto,
      DescripcionAnteproyecto: this.crearRegistroAnteProyecto.value.DescripcionAnteproyecto,
      timeEdicion: new Date()
  }
    this._registroAnteProyectoService.actualizaranteproyecto(id, objectoAnteproyecto).then(() =>{
      this.router.navigate(['/LitarAnteProyectos']);
    })
  }
  
  
  
  
  anadiranteproyecto(){
    const objectoAnteproyecto: any = {
      nombreAnteproyecto: this.crearRegistroAnteProyecto.value.nombreAnteproyecto,
      DescripcionAnteproyecto: this.crearRegistroAnteProyecto.value.DescripcionAnteproyecto,
      timeDeCreacion: new Date(),
      timeEdicion: new Date()
  }
  this._registroAnteProyectoService.anadirAnteproyecto(objectoAnteproyecto).then(()=>{
  this.router.navigate(['/LitarAnteProyectos']);
    }).catch(error =>{
      console.log(error);
     })
  }

  


}
