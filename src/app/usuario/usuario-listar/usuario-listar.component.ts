import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
})
export class UsuarioListarComponent {

 ListarUsuario: Observable<Usuario[]>;

 constructor(private fire: AngularFireDatabase) {
     this.ListarUsuario = this.fire.list<Usuario>('usuario').snapshotChanges().pipe(
       map( lista => lista.map(linha => ({key: linha.payload.key, ... linha.payload.val() }) )) );

 }

}
