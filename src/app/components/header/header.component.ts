import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton, // Importar los componentes faltantes
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() titulo!: string;
}
