import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuDesplegableService {
  private open: boolean = false;

  toggle() {
    this.open = !this.open;
  }

  getOpen() {
    return this.open;
  }
  constructor() { }
}
