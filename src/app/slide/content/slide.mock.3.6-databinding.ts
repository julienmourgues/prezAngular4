import {Slide, SubTitleFragment, ImageFragment, DemoFragment, Speaker, CodeFragment} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_6: Slide = new Slide();
SLIDE_3_6.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Databinding';

SLIDE_3_6.pushFragments(subTitle);
let img1 = new ImageFragment();
img1.content = '/src/images/databinding.png';
img1.hideOnStep=1;
SLIDE_3_6.pushFragments(img1);

let demoDatabinding = new DemoFragment('databinding');
demoDatabinding.stepNumber = 1;
SLIDE_3_6.pushFragments(demoDatabinding);


let code = new CodeFragment();
code.content = `<pre>
    <code class="hmtl highlight">&lt;!-- databinding.component.html --&gt;
&lt;h3&gt;D&eacute;mo Databinding&lt;/h3&gt;
&lt;h4&gt;One Way Binding&lt;/h4&gt;
Valeur initiale : {{value}}

&lt;h4&gt;Two Way Binding / Event&lt;/h4&gt;
&lt;input [(ngModel)]=&quot;property&quot; placeholder=&quot;Entrer une valeur bind&eacute;e&quot;/&gt;
&lt;button *ngIf=&quot;property&quot; class=&quot;btn btn-primary&quot; (click)=&quot;afficherValeurProperty();&quot;&gt;Event&lt;/button&gt;
&lt;p *ngIf=&quot;property&quot;&gt;Two Way binding : {{property}}&lt;/p&gt;</code>
</pre>`;
code.stepNumber = 1;
SLIDE_3_6.pushFragments(code);

let codeTS = new CodeFragment();
codeTS.content = `<pre>
    <code class="typescript highlight">// databinding.component.ts    
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
}</code>
</pre>`;
codeTS.stepNumber = 1;
SLIDE_3_6.pushFragments(codeTS);