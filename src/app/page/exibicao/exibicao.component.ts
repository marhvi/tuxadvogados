import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})
export class ExibicaoComponent implements OnInit {
  clientes= [];

  constructor(private fs: FirebaseService){}  
  
  ngOnInit(): void {
    this.fs.consultaDados().subscribe(caixinha => this.clientes = caixinha);
  }
}
