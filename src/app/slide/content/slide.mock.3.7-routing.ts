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
