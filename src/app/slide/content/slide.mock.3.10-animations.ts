import {Slide, SubTitleFragment, ImageFragment, DemoFragment, CodeFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_10: Slide = new Slide();
SLIDE_3_10.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content='Animations';
SLIDE_3_10.pushFragments(subTitle);

let demoRouting = new DemoFragment('animations');
SLIDE_3_10.pushFragments(demoRouting);

let code = new CodeFragment();
code.content = `<pre>
    <code class="typescript highlight">@Component({
  selector: 'animations-in-out',
  template: \`&lt;ul&gt; &lt;li *ngFor="let speaker of speakers" [@flyInOut]="'in'"&gt;{{speaker.name}}&lt;/li&gt;&lt;/ul&gt;\`,
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void =&gt; *', [
        style({ opacity: 0,  transform: 'translateX(-100%)' }),
        animate('0.5s ease-in')
      ]),
      transition('* =&gt; void', [
        animate('0.5s 10 ease-out', style({ opacity: 0, transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
}) </code>
</pre>`;
SLIDE_3_10.pushFragments(code);

