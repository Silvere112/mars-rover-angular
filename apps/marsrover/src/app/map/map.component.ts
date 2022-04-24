import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { MarsElement } from "./mars.interface";

@Component({
  selector: 'mr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('rendererCanvas', {static: true})
  rendererCanvas!: ElementRef<HTMLCanvasElement>;

  @ContentChild(MarsElement)
  set rover(value: MarsElement) {
    value.render(this.rendererCanvas)
  }

}



