import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'router',
    templateUrl: './router.component.html'
})
export class RouterComponent implements OnInit {
    title: string = '';
    color: string = '';

    constructor(private _router: Router,  private _activatedRoute: ActivatedRoute ) { }

    ngOnInit() {
        this._activatedRoute.data.forEach(data => { this.title = data['title']; this.color = data['color']; });
    }

    clickDemo1() { this._router.navigate(['/demo1']); }
    clickDemo2() { this._router.navigate(['/demo2']); }
    clickBack()  { this._router.navigate(['/']); }

}