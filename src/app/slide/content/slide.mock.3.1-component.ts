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

let subTitleComponentServices = new SubTitleFragment();
subTitleComponentServices.content = 'Component / Services';
subTitleComponentServices.stepNumber = 2;
SLIDE_3_1.pushFragments(subTitleComponentServices);

let quote1 = new QuoteFragment();
quote1.content = `
<strong>Component classes should be lean</strong>. They don't fetch data from the server, validate user input, or log directly to the console. They delegate such tasks to services.
A good component presents properties and methods for data binding. It delegates everything nontrivial to services.
`;
quote1.stepNumber = 2;
SLIDE_3_1.pushFragments(quote1);

