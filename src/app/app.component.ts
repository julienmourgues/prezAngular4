import {Component, OnInit, OnDestroy, HostListener} from '@angular/core'
import {SlideService} from "./slide/slide.service"
import {Slide} from "./slide/slide.model"
import {Subscription} from "rxjs/Rx"

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SlideService]
})
export class AppComponent implements OnInit, OnDestroy {
    slides: Slide[]
    selectedSlide: Slide
    nbSteps: number
    stepCounter: number
    subscription: Subscription

    constructor(private service: SlideService) {
    }

    ngOnInit() {
        this.slides = this.service.getSlides();
        
        let slideNumber: number = +localStorage.getItem('slideNumber');
        if(slideNumber === 0) {
            slideNumber = 1;
        }
        this.changeSelectedSlide(slideNumber);

        this.subscription = this.service.selectedSlide$.subscribe(
            slide => {
                console.log('inside lectedSlide$.subscribe')
                this.changeSelectedSlide(slide.id);
            }
        )
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe()
    }

    changeSelectedSlide(id: number, isNext: boolean = true) {
        this.selectedSlide = this.slides[id - 1]
        this.nbSteps = this.selectedSlide.nbSteps
        this.stepCounter = (isNext) ? 0 : this.nbSteps;
        
        localStorage.setItem('slideNumber', id.toString());
    }

    @HostListener('window:keyup', ['$event'])
    handleKeyboard(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 33:
            case 37:
                // Flèche gauche OU telecommande Logitech previous
                this.previousStep()
                break
            case 34:
            case 39:
                // Flèche droite OU telecommande Logitech next
                this.nextStep()
                break
            default:
            // Ne rien faire
        }
    }

    @HostListener('document:click', ['$event'])
    handleClick(event: MouseEvent) {
        //catch le click gauche uniquement
        if (event.which === 1) {
            this.nextStep();
        }
    }

    previousStep() {
        if (this.stepCounter-- == 0) {
            this.previousSlide();
        } 
    }

    nextStep() {
        if (this.nbSteps <= this.stepCounter++) {
            this.nextSlide();
        }
    }

    previousSlide() {
        let slideNumber = this.slides.length;
        if (this.selectedSlide.id !== 1) {
            slideNumber = this.selectedSlide.id - 1;
        } 
        this.changeSelectedSlide(slideNumber, false);
        
    }

    nextSlide() {
        let slideNumber = 1;
        if (this.selectedSlide.id !== this.slides.length) {
            slideNumber = this.selectedSlide.id + 1;
        } 
        this.changeSelectedSlide(slideNumber, true);
    }
}
