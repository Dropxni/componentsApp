import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol,IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle} from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonCard, IonGrid, IonContent, CommonModule, FormsModule, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, HeaderComponent]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
