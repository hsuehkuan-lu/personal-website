import { Component } from '@angular/core';
import { Constants } from '../constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly constants = Constants;
}
