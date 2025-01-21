import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonList, IonItem, IonFabList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, eye, trash, beer, arrowUp, arrowDown, arrowForward } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonFabList, IonItem, IonList, IonIcon, IonFabButton, IonFab, IonContent, CommonModule, FormsModule, RouterLink, HeaderComponent]
})
export class FabPage implements OnInit {
$index: any;

  constructor() {
    addIcons({beer, arrowUp, arrowForward, arrowDown, add, eye, trash});
  }

  ngOnInit() {
  }

}
