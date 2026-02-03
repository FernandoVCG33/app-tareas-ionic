import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon, IonLabel, IonList
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {addOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton, IonIcon, IonLabel, IonList],
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
    console.log(this.task);
    if(!this.existTask(this.task) ){
      this.tasksList.push(this.task);
      console.log('Task added:', this.task , this.tasksList.length);
      this.task = '';
    }
    else{
      console.log("La tarea existe"  );
    }
  }
  showConsole(){
    for(let i = 0; i < this.tasksList.length; i++){
      console.log(this.tasksList[i]);
    }
  }
  private existTask(task: string) {
    return this.tasksList.find( (item:string)=> task.toUpperCase().trim() ===
      item.toUpperCase().trim() );
  }
}
