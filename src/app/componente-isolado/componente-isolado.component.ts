import { Component, OnInit, Input ,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-componente-isolado',
  templateUrl: './componente-isolado.component.html',
  styleUrls: ['./componente-isolado.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponenteIsoladoComponent implements OnInit {
  @Input() characters;

  constructor() { }

  ngOnInit() {
  }
}
// El componente isolado es un Componente de presentacion con la peculiaridad de que esta  isolado teniendo ya cada uno de los caracteres en lugar de todo el objeto