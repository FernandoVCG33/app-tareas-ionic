import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon, IonLabel, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonReorderGroup
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {addOutline, trashOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {Alert} from "../../services/alert";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton, IonIcon, IonLabel, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonReorderGroup],
})
export class HomePage {
  private alertService:Alert= inject(Alert);
  public tasksList: string[] = [];
  public task: string = '';
  constructor() {
    addIcons({
      addOutline,
      trashOutline
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
  delete(task:string){
      this.alertService.alertConfirm(
        'Confirmar eliminación',
        '¿Estás seguro de que deseas eliminar la tarea',
        ()=> this.removeTask(task)
      )
  }
  private removeTask(task:string){
    console.log('Eliminando tarea:'+ task);
    const index = this.tasksList.findIndex(
      (item:string)=> task.toUpperCase().trim() === item.toUpperCase().trim());
    if (index != -1) {
      this.tasksList.splice(index, 1);
      console.log("TAREA ELIMINADA"  );
    }
    else{
      console.log("LA TAREA NO EXISTE PARA ELIMINAR"  );
    }
  }
  orderTask(event:any){

  }
}
