import { Component } from '@angular/core';
import { Constants } from '../constant';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  readonly constants = Constants;
}
