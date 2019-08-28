import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';

export class ListarUsuarioComponent implements OnInit{
 ListarUsuario: Observable<Usuario[]>;
 constructor(private fire: AngularFireDatabase) {
     this.ListaUsuario = this.fire.list<Usuario>('usuario').snapshotChanges().pipe(
       map( lista => lista.map({key: linha.payload.key, ... linha.payload.val() }) )) 
     );

 }

}
