import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ItemMenu } from '@core/models/item-menu';
import { filter, map } from 'rxjs';
import { MenuDesplegableService } from './services/menu-desplegable.service';
@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.css']
})

export class MenuDesplegableComponent implements OnInit {

  open: boolean = false;
  private router = inject(Router);
  private actRoute = inject(ActivatedRoute);
  private menuDes = inject(MenuDesplegableService);

  @Input() itemsMenu!: ItemMenu[];
  @Input() url: string = ''


  getOpen() {
    return this.menuDes.getOpen();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.actRoute.snapshot.fragment)
    ).subscribe(frag => {
      if (frag) {
        const element = document.querySelector(`#${frag}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        }
      }
    })
  }

}
