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
import { Speakers } from './animations.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component( {
    selector: 'animations-in-out',
    template: `
    <ul>
      <li *ngFor="let speaker of speakers"
          [@flyInOut]="'in'"
          (click)="speaker.toggleState()">
         {{speaker.name}}
      </li>
    </ul>
  `,
    styleUrls: ['./animations.inout.component.css'],
    animations: [
        trigger( 'flyInOut', [
            state( 'in', style( { opacity: 1, transform: 'translateX(0)' }) ),
            transition( 'void => *', [
                style( {
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate( '0.5s ease-in' )
            ] ),
            transition( '* => void', [
                animate( '0.5s 10 ease-out', style( {
                    opacity: 0,
                    transform: 'translateX(100%)'
                }) )
            ] )
        ] )
    ]
})
export class AnimationsInOutComponent {
    @Input() speakers: Speakers;
}

