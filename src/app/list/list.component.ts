import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { NavService } from '../nav.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public people: Observable<any>;

  constructor(
    private apiService: ApiService,
    private navService: NavService,
    private personService: PersonService
  ) {
    this.people = this.apiService.getPeople();
  }

  onClick(person) {
    this.personService.setPerson(person);
    this.navService.toDetailed();
  }
}
