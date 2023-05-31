import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto2Angular11';
  subtitle: string = 'Aquí tienes una guía rápida para poder crear tu primer proyecto Angular desde cero.'
  nivel: string = 'cero';

  //esto es para crear el router hacia la siguiente page
  constructor(private router: Router) { }
  nextPage(){
    this.router.navigate(['page2']);
  }

}
