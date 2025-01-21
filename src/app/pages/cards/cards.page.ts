import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonCardSubtitle, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
  standalone: true,
  imports: [IonButton, HeaderComponent, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonContent, CommonModule, FormsModule]
})
export class CardsPage implements OnInit {

  peliculas = [
    {
      titulo: 'Inception',
      imagen: 'https://dlby.tmsimg.com/assets/p7825626_p_v7_af.jpg',
      sinopsis:
        'Un ladrón que roba secretos corporativos a través del uso de la tecnología para compartir sueños se le da la tarea inversa: plantar una idea en la mente de un CEO.',
    },
    {
      titulo: 'Interstellar',
      imagen: 'https://imgs.search.brave.com/riNi1T_6PmpWK79oe98yZX66flQ-ugQvKdjNmRz62fI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6ZGpNREF4/WkdJdE1qSTJNeTAw/T0RBMUxUbGtOekl0/T1dGak1EVTVaREps/WVdZM1hrRXlYa0Zx/Y0djQC5qcGc',
      sinopsis:
        'Un grupo de exploradores viajan a través de un agujero de gusano en el espacio en un intento por garantizar la supervivencia de la humanidad.',
    },
    {
      titulo: 'The Dark Knight',
      imagen: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      sinopsis:
        'Cuando la amenaza conocida como el Joker emerge de su pasado misterioso, causa estragos y caos en la gente de Gotham.',
    },
    {
      titulo: 'Avatar',
      imagen: 'https://imgs.search.brave.com/jd1dzH9bFk49dH6p5CLSv4HpoEmy4pFzUV7zIKZopl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxTjFsRytMQklT/LmpwZw',
      sinopsis:
        'Un marine parapléjico enviado a la luna Pandora se debate entre seguir órdenes y proteger la tierra que siente como su hogar.',
    },
    {
      titulo: 'The Matrix',
      imagen: 'https://imgs.search.brave.com/aX1w9KVS4vsnjV9Mz9n5z6j50-MdSg0GlFgzlrZyYso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk4yTm1OMlZo/TVRRdE1ETmlPUzAw/TkRsaExUbGlNamd0/T0RFMlpUWTBPRFF5/TkRSaFhrRXlYa0Zx/Y0djQC5qcGc',
      sinopsis:
        'Cuando un hermoso extraño lleva a Neo a un inframundo prohibido, descubre la verdad impactante: la vida que conoce es una elaborada mentira.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
