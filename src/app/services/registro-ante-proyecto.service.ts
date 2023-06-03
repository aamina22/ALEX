import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroAnteProyectoService {

  constructor(private firestore: AngularFirestore) { }

 

  actualizaranteproyecto(id: string, data: any): Promise<any>{
    return this.firestore.collection('tablaRegistroAnteproyecto').doc(id).update(data);
  }

  obtenerAnteproyecto(id: string): Observable<any>{
    return this.firestore.collection('tablaRegistroAnteproyecto').doc(id).snapshotChanges();
   }

  ObtenerAnteproyecto():Observable<any>{
    return  this.firestore.collection('tablaRegistroAnteproyecto', ref =>ref.orderBy('timeDeCreacion', 'asc')).snapshotChanges();
  }

  borrarAnteproyecto(id: string): Promise<any>{
    return this.firestore.collection('tablaRegistroAnteproyecto').doc(id).delete();
  }

  anadirAnteproyecto(objectoAnteproyecto: any): Promise<any>{
    return this.firestore.collection('tablaRegistroAnteproyecto').add(objectoAnteproyecto);
  }

  

  


}
