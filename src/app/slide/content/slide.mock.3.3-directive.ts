import {Slide, SubTitleFragment, HTMLFragment, CodeFragment, DemoFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_3: Slide = new Slide();
SLIDE_3_3.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Attribute directives';
SLIDE_3_3.pushFragments(subTitle);

let demoDirective = new DemoFragment('directive');
SLIDE_3_3.pushFragments(demoDirective);

let html1 = new HTMLFragment();
html1.content = `
<p>Ajout de comportement à un élément</p>
`;
SLIDE_3_3.pushFragments(html1);


let code1 = new CodeFragment();
code1.content = `
<pre>
    <code class="typescript highlight">// yellow.directive.ts
@Directive({ selector: '[yellow]' })
export class YellowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}</code>
</pre>`;
SLIDE_3_3.pushFragments(code1);

let code2 = new CodeFragment();
code2.content = `<pre>
    <code class="html highlight">&lt;!-- slide.component.html --&gt;
&lt;p yellow class=&quot;pull-right&quot;&gt;DIRECTIVE : Je deviens jaune au survol !&lt;/p&gt;</code>
</pre>`;
SLIDE_3_3.pushFragments(code2);
