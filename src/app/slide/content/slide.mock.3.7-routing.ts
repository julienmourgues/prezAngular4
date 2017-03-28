import {Slide, SubTitleFragment, CodeFragment, DemoFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_7: Slide = new Slide();
SLIDE_3_7.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Routing';
SLIDE_3_7.pushFragments(subTitle);

let demoRouting = new DemoFragment('routing');
demoRouting.hideOnStep=1;
SLIDE_3_7.pushFragments(demoRouting);

let code1 = new CodeFragment();
code1.content = `<pre>
    <code class="typescript highlight">// app.routes.ts
    export const routes: Routes = [
  { path: '', component: RouterComponent },
  { path: 'demo1', component: RouterComponent, data: { title: 'demo1', color: 'purple' }},
  { path: 'demo2', component: RouterComponent, data: { title: 'demo2', color: 'limegreen' }}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: true });</code>
</pre>`;
code1.hideOnStep=1;
SLIDE_3_7.pushFragments(code1);

let code2 = new CodeFragment();
code2.content = `<pre>
    <code class="typescript highlight">// routing.component.ts
@Component({
    selector: 'routing',
    template: '&lt;router-outlet&gt;&lt;/router-outlet&gt;'
})
export class RoutingComponent  { }</code>
</pre>`;
code2.hideOnStep=1;
SLIDE_3_7.pushFragments(code2);

let code3 = new CodeFragment();
code3.content = `<pre>
    <code class="typescript highlight">// router.component.ts
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

}</code>
</pre>`;
code3.stepNumber=1;
SLIDE_3_7.pushFragments(code3);