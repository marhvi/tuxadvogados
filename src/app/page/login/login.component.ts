import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AutenticarService } from '../../service/autenticar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  title = "Login";
  nameButtonForm = "Logar";
  nameButtonCad = "Não possui conta? Clique aqui";

  formulario: FormGroup;


  constructor(
    private formBuilder: FormBuilder, private autenticaService: AutenticarService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })  
  }

  formAuth(){
    if(this.nameButtonForm == "Logar"){
    
      alert("Botão login");

      this.autenticaService.autenticarUser(this.formulario.value);
    

      this.router.navigate(['/']);
    
    } else if(this.nameButtonForm == "Cadastrar"){
    
      alert("Usuário cadastrado");
      this.autenticaService.cadastrarUser(this.formulario.value);

      this.router.navigate(['/login']);
    
    } else {
      alert("Opção inválida");
    }
  }

  alterar(){
    if (this.title == "Login"){
      this.title = "Cadastro";
      this.nameButtonForm = "Cadastrar";
       this.nameButtonCad = "Autenticar";
    } else {
      this.title = "Login";
      this.nameButtonForm = "Logar";
      this.nameButtonCad = "Não possui conta? Clique aqui";
    }
   
  }
}
