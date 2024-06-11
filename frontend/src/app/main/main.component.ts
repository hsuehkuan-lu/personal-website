import { Component } from '@angular/core';
import { Constants } from '../constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  readonly constants = Constants;
}
