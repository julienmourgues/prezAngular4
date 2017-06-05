export class Slide {
    private _id: number;
    private _title: string;
    private _nbSteps: number = 0;
    private _fragments: Array<Fragment<any>> = new Array<Fragment<any>>();
    private _speaker: Speaker = Speaker.JM;

    set id(id: number) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set title(title: string) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    pushFragments(fragment: Fragment<any>) {
        if (this._nbSteps < fragment.stepNumber) {
            this._nbSteps = fragment.stepNumber;
        }
        this._fragments.push(fragment);
    }

    get fragments() {
        return this._fragments;
    }

    get nbSteps() {
        return this._nbSteps;
    }


    get speaker():Speaker {
        return this._speaker;
    }

    set speaker(value:Speaker) {
        this._speaker = value;
    }
}

export enum Speaker {
    JM
}

export abstract class Fragment<T> {

    private _content: T;
    private _className: string = "";
    private _innerClassName: string = "";
    private _stepNumber: number = 0;
    private _hideOnStep: number = -1;

    set content(content: T) {
        this._content = content;
    }

    get content() {
        return this._content;
    }

    set className(className: string) {
        this._className = className;
    }

    get className() {
        return this._className;
    }

    get innerClassName(): string {
        return this._innerClassName;
    }

    set innerClassName(value: string) {
        this._innerClassName = value;
    }

    set stepNumber(stepNumber: number) {
        this._stepNumber = stepNumber;
    }

    get stepNumber() {
        return this._stepNumber;
    }

    set hideOnStep(hideOnStep: number) {
        this._hideOnStep = hideOnStep;
    }

    get hideOnStep() {
        return this._hideOnStep;
    }

}

/**
 * <h2 *ngIf="SubTitleFragment" [innerHTML]="fragment.content"></h2>
 */
export class SubTitleFragment extends Fragment<string> {

}

/**
 * <div *ngIf="HTMLFragment" [innerHTML]="fragment.content"></div>
 */
export class HTMLFragment extends Fragment<string> {

}

/**
 * <p *ngIf="TextFragment" [innerHTML]="fragment.content"></p>
 */
export class TextFragment extends Fragment<string> {

}

/**
 * <span *ngIf="InlineTextFragment" [innerHTML]="fragment.content"></span>
 */
export class InlineTextFragment extends Fragment<string> {

}

/**
 * <section *ngIf="CodeFragment" [innerHTML]="fragment.content" highlight-js-content=".highlight"></section>
 */
export class CodeFragment extends Fragment<string> {

}

/**
 * <blockquote *ngIf="QuoteFragment" [src]="fragment.content"></blockquote>
 */
export class QuoteFragment extends Fragment<string> {

}

/**
 * <img *ngIf="ImageFragment" [src]="fragment.content" />
 */
export class ImageFragment extends Fragment<string> {


}

/**
 * <ul *ngIf="ListFragment">
 *  <li *ngFor="fragment.content">
 * </ul>
 */
export class ListFragment extends Fragment<Array<string>> {
    
    private _nbContent: number = 0;
    // private _clickable: boolean = false;

    constructor() { 
        super(); 
        this.content = new Array<string>();
    }

    pushContent(content: string) {
        this.content.push(content);
        this._nbContent++;
    }

    set nbContent(nbContent: number) {
        this._nbContent = nbContent;
    }

    get nbContent() {
        return this._nbContent;
    }

    // set clickable(clickable: boolean) {
    //     this._clickable = clickable;
    // }

    // get clickable() {
    //     return this._clickable;
    // }

}

export class OrderedListFragment extends ListFragment {
}

/**
 * <a *ngIf="LinkFragment" [href]="fragment.href" [innerHTML]="fragment.content"></a>
 */
export class LinkFragment extends Fragment<string> {


    private _href: string;


    set href(href: string) {
        this._href = href;
    }

    get href() {
        return this._href;
    }

}


export class DemoFragment extends Fragment<string> {
    type: string;

    constructor(type: string) {
        super();
        this.type = type;
    }
}
