import {Component, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {InfiniteScrollCustomEvent, IonicModule} from "@ionic/angular";
import {async} from "rxjs";
import {Personne} from "../models/personne";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonicModule],
})
export class HomePage implements OnInit{
  items = [];

  constructor() {


    addIcons({ add })
  }

  ngOnInit() {
    this.generateItems();
  }

  ajouterContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = this.contactForm.value;
      this.contacts.push(newContact);
      this.saveContacts();
      this.contactForm.reset();
      this.filterContacts();
    }
  }

  supprimerContact(index: number) {
    this.contacts.splice(index, 1);
    this.saveContacts();
    this.filterContacts();
  }

  title: string ="Mes Contacts";

  personne: Personne = new Personne();



  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev){
    this.generateItems();
    setTimeout(()=>{
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }



}
