import {Slide, SubTitleFragment, CodeFragment, Speaker, ImageFragment} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_8: Slide = new Slide();
SLIDE_3_8.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Injection de dépendances';
SLIDE_3_8.pushFragments(subTitle);

let img = new ImageFragment();
img.content = '/src/images/dependency-injection.png'
SLIDE_3_8.pushFragments(img);

let code1 = new CodeFragment();
code1.content = `
<pre>
    <code class="typescript highlight">// app.component.ts
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SlideService]
})
export class AppComponent {

    constructor(private service: SlideService) {}
}</code>
</pre>`;
SLIDE_3_8.pushFragments(code1);
