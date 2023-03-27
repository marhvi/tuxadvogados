import { Injectable, OnInit } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

import { map } from 'rxjs/operators';

//Determina que esse arquivo é um serviço
@Injectable({
    providedIn: 'root'
})
export class FirebaseService implements OnInit{

    minhaColecao: AngularFirestoreCollection

    constructor(private af: AngularFirestore){ this.minhaColecao = this.af.collection('clientes');
    }
    
    ngOnInit(): void {
       
    }

    //Consultar
    consultaDados(){
        return this.minhaColecao.snapshotChanges().pipe(
            map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data}
                })
            })
        )    
    }
    
    //Cadastrar
    cadastraDados(dados){
        return this.minhaColecao.add(dados);
    }

    //Editar
    editaDados(id, dados){
        return this.minhaColecao.doc(id).update(dados)
    }

    //Excluir
    excluiDados(id){
        return this.minhaColecao.doc(id).delete();
    }
}