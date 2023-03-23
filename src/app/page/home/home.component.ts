import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome = "TuxAdvogados";
  descricao = "O seu site ideal para cadastro de clientes! Venha aproveitar";
  imagen = "https://media.istockphoto.com/id/1388925357/photo/the-statue-of-justice-lady-justice-or-iustitia-justitia-the-roman-goddess-of-justice.jpg?b=1&s=170667a&w=0&k=20&c=Clf2J4ZTQzLwEXhkB-_DC80ZIsLB6gzBTGtJ55WwHpo="
}
