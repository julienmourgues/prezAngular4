import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'myfilter'
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        let filtre = args;
        if(!filtre) {
            return items;
        }
        return items.filter(item => item.indexOf(filtre) !== -1);
    }
}