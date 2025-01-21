import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

import { AlertController } from '@ionic/angular'
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class AlertsPage implements OnInit {

  alertCtrl = inject(AlertController);

  constructor() { }

  ngOnInit() {
  }

  async openAlert() {

    const alert = await this.alertCtrl.create({
      header: 'Por mujeres',
      message: 'alerta'
    });

    await alert.present();

  }

  async openAlert2() {

    const alert = await this.alertCtrl.create({
      header:'dasdasd',
      subHeader: 'Por mujeres',
      message: 'alerta',
      backdropDismiss: false,
      buttons: [
        {
          text: 'aceptar',
          handler: () => console.log('aceptado')
        },

        {
          text: 'cancelar',
          handler: () => console.log('aceptado')
        }

      ],
    });

    await alert.present();

  }

  async login() {

    const alert = await this.alertCtrl.create({
      header: 'Por mujeres',
      subHeader: 'Ingresa tu email y password',
      buttons: [{
        text: 'ingresar', 
        handler: () => console.log('logeado')
      }],
      inputs: [
        {
        name: 'email',
        type: 'email',
        placeholder: 'correo electronico'
      },

      {
        name: 'email',
        type: 'email',
        placeholder: 'correo electronico'
      }
      ],
    });

    await alert.present();

  }

  async select() {

    const alert = await this.alertCtrl.create({
      header: 'Selecciona tu mierda',
      buttons: [{
        text: 'Aceptar', 
        handler: () => console.log('ACEPTADO')
      }],
      inputs: [
        {
        label: 'Metal',
        type: 'radio',
        value: 'Metal'
      },

      {
        label: 'Rock',
        type: 'radio',
        value: 'Rock'
      },

      {
        label: 'Salsa',
        type: 'radio',
        value: 'Salsa'
      }
      ],
    });

    await alert.present();

  }

  async registro() {
    const alert = await this.alertCtrl.create({
      header: 'Registro',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre',
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo electrónico',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña',
        },
        {
          name: 'edad',
          type: 'number',
          placeholder: 'Edad',
        },
        {
          name: 'cumpleanios',
          type: 'month',
          placeholder: 'cumpleanios'
        }
      ],
      buttons: [
        {
          text: 'Crear',
          handler: (data) => console.log('Datos registrados:', data),
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  // Formulario: Registro -> nombre, email, password, edad
  // Formulario: Dos botones -> Crear -Cancelar
  // Formualrio: +




}
