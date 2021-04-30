import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-componente-presentacion',
  templateUrl: './componente-presentacion.component.html',
  styleUrls: ['./componente-presentacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentePresentacionComponent implements OnChanges {
  @Input() list: any[];
  constructor() { 
  }

  ngOnChanges(){
 }
}
 // El componente de presentación como su nombre lo indica sirve para presentar la peculiaridad de que esta  obtiene el objeto podriamos usar solo un componente de presentacion pero para cuestiones practicas y de reutilizacion utilizaremos dos los cuales seran este componente y el componente isolado
 