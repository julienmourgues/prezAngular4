import {Component, ElementRef, HostListener, Inject } from "@angular/core";
import {SlideService} from "../../slide/slide.service"
import {log} from "./metadata.log.annotation";

@Component({
    selector: 'metadata',
    template: `<div>Démo metadata</div><div [innerHTML]='message'></div>`
})
export class MetadataComponent {

    message:string = '';

    @log
    getMessage(message: string) {
        this.message = 'show ' + message;
        return this.message;
    }

    @HostListener('mouseenter')
    mouseenter(event) {
        this.getMessage('metadata');
    }

    constructor(private service: SlideService) {
        console.log('annotations : ' + Reflect.getMetadata('annotations', MetadataComponent));
        console.log('design:paramtypes : ' + Reflect.getMetadata('design:paramtypes', MetadataComponent));
        console.log('propMetadata : ' + Reflect.getMetadata('propMetadata', MetadataComponent));
        console.log('parameters : ' + Reflect.getMetadata('parameters', MetadataComponent));
    }


}