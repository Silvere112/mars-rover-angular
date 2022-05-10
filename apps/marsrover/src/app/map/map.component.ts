import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { MarsElement } from "./mars.interface";

@Component({
  selector: 'mr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  gridSize = 10

  context!: CanvasRenderingContext2D

  @ViewChild('rendererCanvas', {static: true})
  set rendererCanvas(value: ElementRef<HTMLCanvasElement>) {
    // @ts-ignore
    this.context = value.nativeElement.getContext('2d')

    this.drawGrid()
  }

  @ContentChild(MarsElement)
  set rover(value: MarsElement) {
    value.render(this.context)
  }

  private drawGrid() {
    this.drawColumn();
    this.drawRow();
  }

  private drawColumn() {
    const increment = this.context.canvas.width / (this.gridSize + 1);
    for (let i = 0; i < this.context.canvas.width; i += increment) {
      this.context.beginPath();
      this.context.moveTo(i, 0);
      this.context.lineTo(i, this.context.canvas.height);
      this.context.stroke();
    }
  }

  private drawRow() {
    const increment = this.context.canvas.height / (this.gridSize + 1);
    for (let i = 0; i < this.context.canvas.height; i += increment) {
      this.context.beginPath();
      this.context.moveTo(0, i);
      this.context.lineTo(this.context.canvas.width, i);
      this.context.stroke();
    }
  }
}



