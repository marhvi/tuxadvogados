import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  form(formulario: any){
    console.log(formulario.value);
  }

  enviou(){
    alert("Formulario Enviado");
  }
}
