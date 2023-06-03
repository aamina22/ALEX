import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanteamientoService {

  constructor(private firestore: AngularFirestore) { }

  agregarPlanteamiento(Objectoplanteamiento: any): Promise<any>{
    return this.firestore.collection('TablaPlanteamiento').add(Objectoplanteamiento);
  }

  VERIFICACION():Observable<any>{
    return  this.firestore.collection('TablaDescripcion', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  Obtenerplanteamientos():Observable<any>{
    return  this.firestore.collection('TablaPlanteamiento', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  Borrarplanteamiento(id: string): Promise<any>{
    return this.firestore.collection('TablaPlanteamiento').doc(id).delete();
  }

  Obtenerplanteamiento(id: string): Observable<any>{
   return this.firestore.collection('TablaPlanteamiento').doc(id).snapshotChanges();
  }

  Actualizarplanteamiento(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaPlanteamiento').doc(id).update(data);
  }

}
