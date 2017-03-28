import {Component} from "@angular/core";
@Component({
    selector: 'databinding',
    templateUrl: './databinding.component.html'
})
export class DatabindingComponent {
    value:string = 'init value';
    property:string = '';

    afficherValeurProperty(){
        alert("La valeur du champ property dans le contrôleur TS est " + this.property);
    }
}