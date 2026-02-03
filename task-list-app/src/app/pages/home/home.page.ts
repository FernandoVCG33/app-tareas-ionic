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
  public tasksList: string[] = [];
  public task: string = '';
  constructor() {
    addIcons({
      addOutline
    })
  }
  addTask(){
    this.tasksList.push();
    console.log('Task added:', this.task);
    this.task = '';
  }
  showConsole(){
    for(let i = 0; i < this.tasksList.length; i++){
      console.log(this.tasksList[i]);
    }
  }
}
