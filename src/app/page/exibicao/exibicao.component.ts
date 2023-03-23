import { Component } from '@angular/core';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})
export class ExibicaoComponent {
  clientes= [
    {nome: "João", foto: "https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973__340.jpg", tipo: "Cliente VIP"},
    {nome: "Pedro", foto: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg", tipo: "Cliente novo"},
    {nome: "Mateus", foto:"https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189__340.jpg", tipo: "Cliente frequente"},
    {nome: "Maria", foto:"https://cdn.pixabay.com/photo/2020/02/24/02/49/female-4875046__340.jpg", tipo: "Cliente novo"}
  ];
}
