import { Component, inject } from '@angular/core';
import { ItemMenu } from '@core/models/item-menu';
import { MenuDesplegableService } from '@shared/components/menu-desplegable/services/menu-desplegable.service';
@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css']
})

export class CpComponent {

  private menuDes = inject(MenuDesplegableService);

  OnToggle() {
    this.menuDes.toggle();
  }

  items: ItemMenu[] = [
    {
      name: 'Inicio',
      fragment: 'index'
    },
    {
      name: 'Ciclos de vida',
      fragment: 'ciclo-vida'
    }
  ]
}
