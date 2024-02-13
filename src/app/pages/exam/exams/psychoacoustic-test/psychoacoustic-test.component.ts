import { Component } from '@angular/core';
import {
  StepsComponent,
} from './steps/steps.component';

@Component({
  selector: 'app-psychoacoustic-test',
  standalone: true,
  imports: [
    StepsComponent,
  ],
  templateUrl: './psychoacoustic-test.component.html',
  styleUrl: './psychoacoustic-test.component.scss'
})
export class PsychoacousticTestComponent {

}
