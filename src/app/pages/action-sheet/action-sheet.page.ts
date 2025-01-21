import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular'
import { __awaiter } from 'tslib';
import { addIcons } from 'ionicons';
import { balloon, trash } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ActionSheetPage implements OnInit {

  private actionSheetCtrl = inject
  (ActionSheetController);

  constructor() { 
    addIcons ({balloon, trash})
   }

  ngOnInit() {
  }

  async verOpciones() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'opciones',
      mode: 'ios',
      buttons: [
        {
          text: 'editar',
          icon: 'balloon',
          handler: () => console.log('editando')
        },

        {
          text: 'editar',
          icon: 'balloon',
          handler: () => console.log('editando')
        },

        {
          text: 'Eliminar',
          icon: 'balloon',
          role: 'cancel',
          handler: () => console.log('editando')
        }
      ]
    });
    
    await actionSheet.present();
  }

  async verMas() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Mas Opciones',
      mode: 'ios',
      cssClass: 'my-action-sheet',
      buttons: [
        {
          text: 'editar',
          icon: 'balloon',
          handler: () => console.log('editando')
        },

        {
          text: 'editar',
          icon: 'balloon',
          handler: () => console.log('editando')
        },

        {
          text: 'Eliminar',
          icon: 'balloon',
          role: 'cancel',
          handler: () => console.log('editando')
        }
      ]
    });
    
    await actionSheet.present();
  }


  

}
