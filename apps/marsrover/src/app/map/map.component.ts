import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { MarsComponent } from "./mars.interface";

@Component({
  selector: 'mr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('rendererCanvas', {static: true})
  rendererCanvas!: ElementRef<HTMLCanvasElement>;

  @ContentChild(MarsComponent)
  set rover(value: MarsComponent) {
    value.render(this.rendererCanvas)
  }

}



