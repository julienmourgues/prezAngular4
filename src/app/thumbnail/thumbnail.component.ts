import {Component, Input, Output, EventEmitter} from "@angular/core"
import {Slide} from "../slide/slide.model"
import {SlideService} from "../slide/slide.service"
import {NgClass} from "@angular/common";


@Component({
    selector: 'thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent{
    @Input() thumbnail:Slide
    @Input() selected:boolean

    constructor(private service:SlideService) {

    }

    changeSelectedSlide(thumbnail:Slide) {
        this.service.changeSelectedSlide(thumbnail)
    }

}




