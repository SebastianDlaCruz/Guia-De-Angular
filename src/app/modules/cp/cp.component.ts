import { Component } from '@angular/core';
import { ItemMenu } from '@core/models/item-menu';

@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css']
})

export class CpComponent {

  items: ItemMenu[] = [
    {
      name: 'Inicio',
      url: '/componentes#index'
    },
    {
      name: 'Ciclos de vida',
      url: '/componentes#ciclo-vida'
    }
  ]
}
