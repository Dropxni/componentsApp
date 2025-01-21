import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { beer } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ButtonsPage implements OnInit {

  constructor() {

    addIcons ({beer})
  }

  ngOnInit() {
  }

}
