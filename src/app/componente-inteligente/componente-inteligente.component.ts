import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-componente-inteligente',
  templateUrl: './componente-inteligente.component.html',
  styleUrls: ['./componente-inteligente.component.css'],
})
export class ComponenteInteligenteComponent implements OnInit {
  list: Observable<any>;
    results: any[];

  constructor(http: HttpClient) {
    const path = 'https://rickandmortyapi.com/api/character/';
    this.list = http.get<any[]>(path).pipe(
      map(data => {
      return data['results']
      })
    );
  }

  ngOnInit() {}
}
// En este componete iteligente consumimos la api de rick y morty para presentar los characteres en otra vista 