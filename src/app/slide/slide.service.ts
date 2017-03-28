import {Slide} from "./slide.model"
import {Subject} from "rxjs/Rx"
import {SlideMock} from "./slide.mock";



export class SlideService {
    // Observable selectedSlide
    private selectedSlideSource = new Subject<Slide>()
    selectedSlide$ = this.selectedSlideSource.asObservable()

    constructor() {
    }




    changeSelectedSlide(slide: Slide) {
        this.selectedSlideSource.next(slide)
    }

    getSlides():Slide[] {
        return SlideMock.SLIDES
    }
    getSlide(id:number):Slide {
        for (let slide of SlideMock.SLIDES) {
            if(slide.id == id) {
                return slide
            }
        }
        return null
    }

}