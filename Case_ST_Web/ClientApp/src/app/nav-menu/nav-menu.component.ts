import { Component, Input } from '@angular/core';
import { DataServices } from '../Services/DataServices';
import { Menu } from '../dto/Menu';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  public Menu: Array<Menu> = [];


  constructor(private dataService: DataServices) {
    this.GetMenu();
  }

  private GetMenu() {
  this.dataService.GetMenu().subscribe((res: any[]) => {
  debugger
  for (var i = 0; i < res.length; i++) {
    debugger
    this.Menu.push(new Menu(res[i]));
  }
  });
  }
}
