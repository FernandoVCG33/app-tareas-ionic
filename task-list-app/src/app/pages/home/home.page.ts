import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {addOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton,IonIcon],
})
export class HomePage {
  public task: string = '';
  constructor() {
    addIcons({
      addOutline
    })
  }
  addTask(){
    console.log(this.task);
  }
}
