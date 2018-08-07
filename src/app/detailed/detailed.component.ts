import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent {
  person: any;
  names: Array<any> = [];

  constructor(
    private apiService: ApiService,
    private location: Location,
    private personService: PersonService
  ) {
    this.person = this.personService.getPerson();
    this.person.films.forEach(film => this.getFilmName(film));
  }

  backBtn() {
    this.location.back();
  }

  getFilmName(film: any) {
    this.apiService
      .getFilm(film)
      .pipe(map((response: any) => response.title))
      .subscribe((title: string) => this.names.push(title));
  }
}
