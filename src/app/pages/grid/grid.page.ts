import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonGrid, IonRow, IonCol,IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { AlertController } from '@ionic/angular'
import { addIcons } from 'ionicons';
import { alertCircleOutline, beer, rocket, heart, shieldOutline } from 'ionicons/icons';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [ IonIcon, IonCol, IonButton, IonRow, IonCard, IonGrid, IonContent, CommonModule, FormsModule, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, HeaderComponent]
})
export class GridPage implements OnInit {

  alertCtrl = inject(AlertController);

  constructor() { 

    addIcons({shieldOutline,heart,rocket,alertCircleOutline,beer});

   }

  ngOnInit() {
  }

  async openAlert() {

    const alert = await this.alertCtrl.create({
      header: 'AATROX:',
      message: '"Voy a destruirlos a todos… no por venganza, sino por necesidad."'
    });

    await alert.present();
  
  } 

}
