import {Component, Input} from "@angular/core";
import {Slide} from "../slide/slide.model";



@Component({
    selector: 'thumbnails',
    templateUrl: './thumbnails.component.html',
    styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent{
    @Input() thumbnails:Slide[]
    @Input("selected-thumbnail") selectedThumbnail:Slide
}