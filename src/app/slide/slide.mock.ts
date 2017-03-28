import {Slide} from './slide.model';
import {SLIDE_0_1, SLIDE_0_1_1, SLIDE_0_2, SLIDE_1_1, SLIDE_1_2, SLIDE_1_3, SLIDE_2_1,
    SLIDE_2_2, SLIDE_2_3, SLIDE_3_1, SLIDE_3_2, SLIDE_3_3, SLIDE_3_4, 
    SLIDE_3_5, SLIDE_3_6, SLIDE_3_7, SLIDE_3_8, SLIDE_3_9, SLIDE_3_10,  SLIDE_4_0, SLIDE_4_5, SLIDE_4_6,
    SLIDE_4_1, SLIDE_4_2, SLIDE_4_4, SLIDE_4_7, SLIDE_5_1,
    SLIDE_5_2, SLIDE_5_3, SLIDE_5_4, SLIDE_6_0} from './content/index';

export class SlideMock {

    public static SLIDES: Array<Slide> = new Array<Slide>();
    public static counter: number = 1;

    public static add(slide: Slide) {
        slide.id = this.counter++;
        this.SLIDES.push(slide);
    }
}

SlideMock.add(SLIDE_0_1);
SlideMock.add(SLIDE_0_1_1);
SlideMock.add(SLIDE_0_2);
SlideMock.add(SLIDE_1_1);
SlideMock.add(SLIDE_1_2);
SlideMock.add(SLIDE_1_3);
SlideMock.add(SLIDE_2_1);
SlideMock.add(SLIDE_2_2);
SlideMock.add(SLIDE_2_3);
SlideMock.add(SLIDE_3_1);
SlideMock.add(SLIDE_3_2);
SlideMock.add(SLIDE_3_3);
SlideMock.add(SLIDE_3_4);
SlideMock.add(SLIDE_3_5);
SlideMock.add(SLIDE_3_6);
SlideMock.add(SLIDE_3_7);
SlideMock.add(SLIDE_3_8);
SlideMock.add(SLIDE_3_9);
SlideMock.add(SLIDE_3_10);
SlideMock.add(SLIDE_4_0);
SlideMock.add(SLIDE_4_1);
SlideMock.add(SLIDE_4_2);
SlideMock.add(SLIDE_4_4);
SlideMock.add(SLIDE_4_5);
SlideMock.add(SLIDE_4_6);
SlideMock.add(SLIDE_4_7);
SlideMock.add(SLIDE_5_1);
SlideMock.add(SLIDE_5_2);
SlideMock.add(SLIDE_5_3);
SlideMock.add(SLIDE_5_4);
SlideMock.add(SLIDE_6_0);