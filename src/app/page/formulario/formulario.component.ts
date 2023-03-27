import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit {

  formDataDriven!: FormGroup;
 
  constructor(private bob: FormBuilder, private fs: FirebaseService){}

  ngOnInit(): void {

    this.validarForm();
  }

  validarForm(){
    this.formDataDriven = this.bob.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  cadastrar(){
    try{
    this.fs.cadastraDados(this.formDataDriven.value);
    alert("Formulario Enviado");
    }catch(err){
      console.log(err);
    }
  }
}
