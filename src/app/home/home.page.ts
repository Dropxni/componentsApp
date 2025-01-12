import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, balloon, rocket} from 'ionicons/icons';

interface menuItem {
  tittle: string,
  url: string,
  icon: string,
  color: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, RouterLink],
})
export class HomePage {

  menuList: menuItem[] = [

    {
      tittle: 'buttons',
      url: '/buttons',
      icon: 'heart',
      color: 'danger'
    },

    {
      tittle: 'alerts',
      url: '/alerts',
      icon: 'balloon',
      color: 'primary'
    },

    {
      tittle: 'action-sheet',
      url: 'action-sheet',
      icon: 'rocket',
      color: 'succes'
    }


  ];

  constructor() {

    addIcons ({heart, balloon, rocket});
  }
}
