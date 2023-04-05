import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/service/autenticar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome = "TuxAdvogados";
  descricao = "O seu site ideal para cadastro de clientes! Venha aproveitar";
  imagen = "https://media.istockphoto.com/id/1388925357/photo/the-statue-of-justice-lady-justice-or-iustitia-justitia-the-roman-goddess-of-justice.jpg?b=1&s=170667a&w=0&k=20&c=Clf2J4ZTQzLwEXhkB-_DC80ZIsLB6gzBTGtJ55WwHpo=";

  usuario = "";

  constructor(private autenticaService: AutenticarService, private route: Router){}

  ngOnInit(){
     this.autenticaService.detalesUser().user.subscribe(results => this.usuario = results.email);
  }

  deslogar() {
    this.autenticaService.logout();
    this.route.navigate(['']);
  }
}
