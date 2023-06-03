import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

 
  constructor(private firestore: AngularFirestore) { }

  agregarSugerencia(objectoSugerencia: any): Promise<any>{
    return this.firestore.collection('TablaSugerencia').add(objectoSugerencia);
  }

  obtenerSugerencias():Observable<any>{
    return  this.firestore.collection('TablaSugerencia', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  BorrarSugerencia(id: string): Promise<any>{
    return this.firestore.collection('TablaSugerencia').doc(id).delete();
  }

  obtenersugerencia(id: string): Observable<any>{
   return this.firestore.collection('TablaSugerencia').doc(id).snapshotChanges();
  }

  ActualizarSugerencia(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaSugerencia').doc(id).update(data);
  }



}
