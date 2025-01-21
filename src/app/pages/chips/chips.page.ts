import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonChip, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-chips',
  templateUrl: './chips.page.html',
  styleUrls: ['./chips.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonChip, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ChipsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
