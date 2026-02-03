import {Component, inject} from '@angular/core';
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
import {Alert} from "../../services/alert";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton, IonIcon, IonLabel, IonList],
})
export class HomePage {
  private alertService:Alert= inject(Alert);
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
      this.alertService.alertMessage('Exito!' ,'Tarea agregada correctamente');
    }
    else{
      console.log("La tarea existe"  );
      this.alertService.alertMessage('Error' ,'La tarea ya existe en la lista');

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
