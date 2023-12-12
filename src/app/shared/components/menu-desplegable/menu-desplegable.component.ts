import { Component, Input } from '@angular/core';
import { ItemMenu } from '@core/models/item-menu';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.css']
})

export class MenuDesplegableComponent {
  @Input() itemsMenu!: ItemMenu[];
}
