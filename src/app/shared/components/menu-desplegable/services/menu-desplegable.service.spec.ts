import { TestBed } from '@angular/core/testing';

import { MenuDesplegableService } from './menu-desplegable.service';

describe('MenuDesplegableService', () => {
  let service: MenuDesplegableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDesplegableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
