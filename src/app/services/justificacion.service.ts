import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JustificacionService {
  constructor(private firestore: AngularFirestore) { }

  agregarTituloG(objectoJustificacion: any): Promise<any>{
    return this.firestore.collection('TablaJustificacion').add(objectoJustificacion);
  }

  BorrarJustificacion(id: string): Promise<any>{
    return this.firestore.collection('TablaJustificacion').doc(id).delete();
  }

  VERIFICACION():Observable<any>{
    return  this.firestore.collection('TablaTituloG', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  obtenerTituloG():Observable<any>{
    return  this.firestore.collection('TablaJustificacion', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  

  ActualizarJustificacion(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaJustificacion').doc(id).update(data);
  }

  obtenertitulo(id: string): Observable<any>{
   return this.firestore.collection('TablaJustificacion').doc(id).snapshotChanges();
  }

 


}
