import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HipotesisService {

  constructor(private firestore: AngularFirestore) { }

  agregarHipotesis(ObjectoHipotesis: any): Promise<any>{
    return this.firestore.collection('TablaHipotesis').add(ObjectoHipotesis);
  }

  VERIFICACION():Observable<any>{
    return  this.firestore.collection('TablaPlanteamiento', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  ObtenerHipotesis():Observable<any>{
    return  this.firestore.collection('TablaHipotesis', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  BorrarHipotesis(id: string): Promise<any>{
    return this.firestore.collection('TablaHipotesis').doc(id).delete();
  }

  Obtenerhipotesis(id: string): Observable<any>{
   return this.firestore.collection('TablaHipotesis').doc(id).snapshotChanges();
  }

  ActualizarHipotesis(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaHipotesis').doc(id).update(data);
  }


}
