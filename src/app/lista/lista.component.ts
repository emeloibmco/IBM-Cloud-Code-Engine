import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {
  item: string;
  items = [];

  onClick() {
    if (this.item.trim().length)
    {
      this.items.push({ name: this.item });
      this.item = '';
    }      
  }

}


