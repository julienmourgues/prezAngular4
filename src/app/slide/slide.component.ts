import {Component, Input} from "@angular/core";
import {Slide, Fragment, Speaker} from "./slide.model";
@Component({
    selector: 'slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css']
})
export class SlideComponent {
    @Input() slide: Slide
    @Input() counter: number

    isShowable(fragment: Fragment<any>, instanceOf: string): boolean {
        return fragment.constructor.name === instanceOf &&
            fragment.stepNumber <= this.counter &&
            (fragment.hideOnStep === -1 || fragment.hideOnStep > this.counter);
    }

    getSpeaker():string {
        if(this.slide.speaker == 2) {
            return ""
        }
        return Speaker[this.slide.speaker]
    }
}