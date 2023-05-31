import { Component } from '@angular/core';

@Component({
  selector: 'block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component {

  public edad: number;
  public nombres: string[];

  constructor(){
    this.edad = 19;
    this.nombres = ['Lola', 'Miguel', 'Iván', 'Victoria', 'Lucía', 'Andrea', 'Balto', 'Layra'];
  }

  aumentarEdad(){
    this.edad++;
  }

  disminuirEdad(){
    this.edad--;
  }

  ngOnInit(): void{

  }

}
