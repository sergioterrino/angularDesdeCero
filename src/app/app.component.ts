import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto2Angular11';
  subtitle: string = 'Aquí tienes una guía rápida para poder crear tu primer proyecto Angular desde cero.'
  nivel: string = 'cero';
}
