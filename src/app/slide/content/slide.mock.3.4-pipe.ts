import {Slide, SubTitleFragment, CodeFragment, ListFragment, DemoFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_4: Slide = new Slide();
SLIDE_3_4.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Pipe';
SLIDE_3_4.pushFragments(subTitle);

let demoPipe = new DemoFragment('pipe');
SLIDE_3_4.pushFragments(demoPipe);

let list = new ListFragment();
list.pushContent('Filtre tableau');
list.pushContent('Tri tableau');
list.pushContent('Formattage d\'une donnée (date...)');
list.hideOnStep=1;
SLIDE_3_4.pushFragments(list);
SLIDE_3_4.speaker = Speaker.R;


let codeHTML = new CodeFragment();
codeHTML.content = `<pre>
    <code class="html highlight">&lt;!-- pipe.component.html --&gt;
&lt;h3&gt;Pipe&lt;/h3&gt;
&lt;input [(ngModel)]=&quot;filtre&quot; placeholder=&quot;Filtrer liste&quot; (click)=&quot;$event.stopPropagation()&quot;/&gt;
&lt;ul&gt;
   &lt;li *ngFor=&quot;let item of items | myfilter:filtre&quot;&gt;{{item}}&lt;/li&gt;
&lt;/ul&gt;</code>
</pre>`;
codeHTML.hideOnStep=1;
SLIDE_3_4.pushFragments(codeHTML);



let code = new CodeFragment();
code.content = `<pre>
    <code class="typescript highlight">// pipe.component.ts
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
}</code></pre>`;
code.stepNumber=1
SLIDE_3_4.pushFragments(code);