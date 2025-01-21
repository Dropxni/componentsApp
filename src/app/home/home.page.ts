import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, balloon, rocket, magnetOutline, calendar, list,radioButtonOffOutline, albums, grid, alertCircle, hardwareChip, arrowForwardCircle, radioButtonOn} from 'ionicons/icons';

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
      icon: 'radio-button-on',
      color: 'medium'
    },

    {
      tittle: 'alerts',
      url: '/alerts',
      icon: 'alert-circle',
      color: 'danger'
    },

    {
      tittle: 'action-sheet',
      url: '/action-sheet',
      icon: 'magnet-outline',
      color: 'warning'
    },

    {
      tittle: 'cards',
      url: '/cards',
      icon: 'albums',
      color: 'success'
    },

    {
      tittle: 'chips',
      url: '/chips',
      icon: 'hardware-chip',
      color: 'medium'
    },

    {
      tittle: 'fab',
      url: '/fab',
      icon: 'arrow-forward-circle',
      color: 'secondary'
    },

    {
      tittle: 'grid',
      url: '/grid',
      icon: 'grid',
      color: 'tertiary'
    },

    {
      tittle: 'list',
      url: '/list',
      icon: 'list',
      color: 'success'
    },

    {
      tittle: 'datetime',
      url: '/datetime',
      icon: 'calendar',
      color: 'warning'
    }


  ];

  constructor() {

    addIcons ({arrowForwardCircle, hardwareChip, rocket, magnetOutline, calendar, list, albums, grid, alertCircle, radioButtonOn});
  }
}
