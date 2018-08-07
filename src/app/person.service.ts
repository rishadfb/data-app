import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private person: any;

  constructor() {}

  setPerson(person) {
    this.person = person;
  }

  getPerson() {
    return this.person;
  }
}
