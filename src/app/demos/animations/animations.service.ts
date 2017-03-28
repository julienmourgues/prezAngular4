import { Injectable } from '@angular/core';

class Speaker {
  constructor(public name: string,
              public state = 'inactive') {
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}

let ALL_SPEAKERS = [
  'Julien',
  'Mathieu'
].map(name => new Speaker(name));

@Injectable()
export class Speakers implements Iterable<Speaker> {

  currentSpeakers: Speaker[] = [];

  [Symbol.iterator]() {
    return this.currentSpeakers.values();
  }

  canAdd() {
    return this.currentSpeakers.length < ALL_SPEAKERS.length;
  }

  canRemove() {
    return this.currentSpeakers.length > 0;
  }

  addActive() {
    let speaker = ALL_SPEAKERS[this.currentSpeakers.length];
    speaker.state = 'active';
    this.currentSpeakers.push(speaker);
  }

  addInactive() {
    let speaker = ALL_SPEAKERS[this.currentSpeakers.length];
    speaker.state = 'inactive';
    this.currentSpeakers.push(speaker);
  }

  remove() {
    this.currentSpeakers.splice(this.currentSpeakers.length - 1, 1);
  }

}
