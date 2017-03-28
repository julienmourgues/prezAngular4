import {Slide, SubTitleFragment, TextFragment, ImageFragment, CodeFragment, DemoFragment, Speaker} from "../slide.model";
import {TITRE4} from "../slide.constantes";

export const SLIDE_3_5: Slide = new Slide();
SLIDE_3_5.title = TITRE4;

let subTitle = new SubTitleFragment();
subTitle.content = 'Metadata';
subTitle.hideOnStep = 1;
SLIDE_3_5.pushFragments(subTitle);

let text1 = new TextFragment();
text1.content = 'Annotations permettant de faire les liens entre les composants.';
text1.hideOnStep = 1;
SLIDE_3_5.pushFragments(text1);

let img1 = new ImageFragment();
img1.content = '/src/images/template-metadata-component.png';
img1.hideOnStep = 1;
SLIDE_3_5.pushFragments(img1);


let subTitle2 = new SubTitleFragment();
subTitle2.content = 'Metadata - annotations custom';
subTitle2.stepNumber = 1;
SLIDE_3_5.pushFragments(subTitle2);

let demoMetadata = new DemoFragment('metadata');
demoMetadata.stepNumber = 1;
SLIDE_3_5.pushFragments(demoMetadata);

let code = new CodeFragment();
code.content = `<pre>
    <code class="typescript highlight">// metadata.log.annotation.ts
export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  var originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    var result = originalMethod.apply(this, args);
    alert("The method args are: " + JSON.stringify(args) + " | The return value is: " + result);
    return result;
  };
  return descriptor;
}

// metadata.component.ts
@Component({ selector: 'metadata', template: '&lt;div&gt;Démo metadata&lt;/div&gt;&lt;div [innerHTML]='message'&gt;&lt;/div&gt;' })
export class MetadataComponent {
    message:string = '';
    @log getMessage(message: string) { this.message = 'show ' + message; return this.message; }
    @HostListener('mouseenter') mouseenter(event) { this.getMessage('metadata'); 
}</code>
</pre>`;
code.stepNumber = 1;
SLIDE_3_5.pushFragments(code);

