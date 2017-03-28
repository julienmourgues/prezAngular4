import {
  Component,
  Input
} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Speakers } from './animations.service';

@Component({
  selector: 'animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  providers: [Speakers]
})
export class AnimationsComponent {
  constructor(private speakers: Speakers) { }
}
