import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  
  formDataDriven!: FormGroup;
  clienteCollection!: AngularFirestoreCollection;

  constructor(private bob: FormBuilder, private af: AngularFirestore){

    this.clienteCollection = af.collection("clientes");

    this.validarForm();
  }

  validarForm(){
    this.formDataDriven = this.bob.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }
  
  //Método que recebe o submit
  cadastrar(){
    this.clienteCollection.add(this.formDataDriven.value);
    console.log(this.formDataDriven.value);
  }

  enviou(){
    alert("Formulario Enviado");
  }
}
