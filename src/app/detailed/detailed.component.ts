import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent {
  person: any;

  constructor(
    private apiService: ApiService,
    private location: Location,
    private personService: PersonService
  ) {
    this.person = this.personService.getPerson();
  }

  backBtn() {
    this.location.back();
  }

  // getFilmNames(films: Array<any>) {
  //   let names = '';
  //   films.forEach(film =>
  //     this.apiService
  //       .getFilm(film)
  //       .pipe(map(response => (names += response.title + ', ')))
  //   );
  //   return names;
  // }
}
