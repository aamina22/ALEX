import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firestore: AngularFirestore) { }
  itemEliminar(id: string): Promise<any>{
    return this.firestore.collection('tablaitems').doc(id).delete();
  }

 

  obtenerItems():Observable<any>{
    return  this.firestore.collection('tablaitems', ref =>ref.orderBy('Fechacreacion', 'asc')).snapshotChanges();
  }

  agregarItem(item: any): Promise<any>{
    return this.firestore.collection('tablaitems').add(item);
  }
  

  itemModificar(id: string, data: any): Promise<any>{
    return this.firestore.collection('tablaitems').doc(id).update(data);
  }

  obteneritem(id: string): Observable<any>{
   return this.firestore.collection('tablaitems').doc(id).snapshotChanges();
  }

 

}
