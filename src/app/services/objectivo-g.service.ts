import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectivoGService {


  constructor(private firestore: AngularFirestore) { }

  VERIFICACION():Observable<any>{
    return  this.firestore.collection('TablaHipotesis', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  agregarObjectivoG(ObjectoObjectivoG: any): Promise<any>{
    return this.firestore.collection('TablaObjectivoG').add(ObjectoObjectivoG);
  }

  obtenerObjectivoG():Observable<any>{
    return  this.firestore.collection('TablaObjectivoG', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  BorrarObjectivoG(id: string): Promise<any>{
    return this.firestore.collection('TablaObjectivoG').doc(id).delete();
  }

  obtenerobjectivog(id: string): Observable<any>{
   return this.firestore.collection('TablaObjectivoG').doc(id).snapshotChanges();
  }

  ActualizarObjectivoG(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaObjectivoG').doc(id).update(data);
  }




}
