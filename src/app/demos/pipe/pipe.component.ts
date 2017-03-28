import {Component} from "@angular/core";
@Component({
    selector: 'pipe',
    templateUrl: './pipe.component.html'
})
export class PipeComponent {
    filtre:string = '';
    
    items:Array<string> = ["Angular", "BackboneJS", "ReactJS", "Express", "NodeJS", "MeteorJS"];
}