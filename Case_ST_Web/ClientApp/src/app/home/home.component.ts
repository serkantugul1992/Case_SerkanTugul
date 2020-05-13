import { Component, Input } from '@angular/core';
import { DataServices } from '../Services/DataServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  @Input() exp: string="home";

  constructor(private dataService: DataServices) 
  {
  }
}
