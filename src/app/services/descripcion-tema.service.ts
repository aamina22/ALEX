import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescripcionTemaService {

  constructor(private firestore: AngularFirestore) { }

  

  ObtenerLaDescripcionTema():Observable<any>{
    return  this.firestore.collection('TablaDescripcion', ref =>ref.orderBy('TimeFecha', 'asc')).snapshotChanges();
  }

  agregarDescripcionTema(ObjectoDespcripcion: any): Promise<any>{
    return this.firestore.collection('TablaDescripcion').add(ObjectoDespcripcion);
  }
  ActualizarDescripcionTema(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaDescripcion').doc(id).update(data);
  }

  ObtenerLaDescripcion(id: string): Observable<any>{
   return this.firestore.collection('TablaDescripcion').doc(id).snapshotChanges();
  }

 

  BorrarDescripcionTema(id: string): Promise<any>{
    return this.firestore.collection('TablaDescripcion').doc(id).delete();
  }

}
