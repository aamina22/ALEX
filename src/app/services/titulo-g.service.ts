import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloGService {

  constructor(private firestore: AngularFirestore) { }
  BorrarTituloG(id: string): Promise<any>{
    return this.firestore.collection('TablaTituloG').doc(id).delete();
  }

  VERIFICACION():Observable<any>{
    return  this.firestore.collection('TablaObjectivoG', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  agregarTituloG(ObjectoTituloG: any): Promise<any>{
    return this.firestore.collection('TablaTituloG').add(ObjectoTituloG);
  }

  

  

  ActualizarTituloG(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaTituloG').doc(id).update(data);
  }

  obtenertitulo(id: string): Observable<any>{
   return this.firestore.collection('TablaTituloG').doc(id).snapshotChanges();
  }

  obtenerTituloG():Observable<any>{
    return  this.firestore.collection('TablaTituloG', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }



}
