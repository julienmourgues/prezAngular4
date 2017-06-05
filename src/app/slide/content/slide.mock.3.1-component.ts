import {Slide, SubTitleFragment, CodeFragment, ListFragment, Speaker, QuoteFragment} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_1: Slide = new Slide();
SLIDE_3_1.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Directive';
subTitle.hideOnStep = 1;
SLIDE_3_1.pushFragments(subTitle);

let list = new ListFragment();
list.pushContent('Elément réutilisable');
list.pushContent('Intéraction en JS / TS');
list.pushContent('Vue HTML / CSS');
list.hideOnStep = 1;
SLIDE_3_1.pushFragments(list);

let subTitleComponent = new SubTitleFragment();
subTitleComponent.content = 'Component = Directive avec Vue';
subTitleComponent.stepNumber = 1;
subTitleComponent.hideOnStep = 2;
SLIDE_3_1.pushFragments(subTitleComponent);




let code1 = new CodeFragment();
code1.content = `
<pre>
    <code class="typescript highlight">//slide.component.ts
@Component({
    selector: 'slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css']
})
export class SlideComponent {
    @Input() slide: Slide
    @Input() counter: number
    
    // Initialisation
    
    // Méthodes...
}</code>
</pre>
`;
code1.stepNumber = 1;
code1.hideOnStep = 2;
SLIDE_3_1.pushFragments(code1);

let code2 = new CodeFragment();
code2.content = `
<pre>
    <code class="html highlight">&lt;!-- slide.component.html --&gt;
&lt;div class=&quot;slide&quot;&gt;
    &lt;h1 class=&quot;main-title&quot;&gt;{{slide.title}}&lt;/h1&gt;
    &lt;section class=&quot;fragments&quot;&gt;
        &lt;div *ngFor=&quot;let fragment of slide.fragments&quot;&gt;&lt;/div&gt;
    &lt;/section&gt;
&lt;/div&gt;</code>
</pre>
`;
code2.stepNumber = 2;
code2.hideOnStep = 3;
SLIDE_3_1.pushFragments(code2);


let code3 = new CodeFragment();
code3.content = `
<pre>
    <code class="html highlight">&lt;!-- app.component.html --&gt;
&lt;header&gt;
    &lt;h1&gt;&lt;img src=&quot;/src/images/angular.svg&quot;/&gt;&amp;nbsp;Technoz - Angular&lt;/h1&gt;
&lt;/header&gt;
&lt;main class=&quot;slider-container&quot;&gt;
    &lt;slide [slide]=&quot;selectedSlide&quot; [counter]=&quot;stepCounter&quot;&gt;&lt;/slide&gt;
    &lt;nav&gt;
        &lt;a (click)=&quot;previousStep()&quot;&gt;&lt;i class=&quot;prev-link fa fa-2x fa-backward&quot;&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;a (click)=&quot;nextStep()&quot;&gt;&lt;i class=&quot;next-link fa fa-2x fa-forward&quot;&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;/nav&gt;
&lt;/main&gt;
&lt;footer&gt;
    &lt;thumbnails [thumbnails]=&quot;slides&quot; [selected-thumbnail]=&quot;selectedSlide&quot;&gt;&lt;/thumbnails&gt;
&lt;/footer&gt;</code>
</pre>`;
code3.stepNumber = 3;
code3.hideOnStep = 4;
SLIDE_3_1.pushFragments(code3);




let subTitleComponentServices = new SubTitleFragment();
subTitleComponentServices.content = 'Component / Services';
subTitleComponentServices.stepNumber = 4;
SLIDE_3_1.pushFragments(subTitleComponentServices);

let quote1 = new QuoteFragment();
quote1.content = `
<strong>Component classes should be lean</strong>. They don't fetch data from the server, validate user input, or log directly to the console. They delegate such tasks to services.
A good component presents properties and methods for data binding. It delegates everything nontrivial to services.
`;
quote1.stepNumber = 4;
SLIDE_3_1.pushFragments(quote1);

