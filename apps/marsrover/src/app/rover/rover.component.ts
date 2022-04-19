import { Component, ElementRef, forwardRef } from '@angular/core';
import { MarsComponent } from "../map/mars.interface";

@Component({
  selector: 'mr-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss'],
  providers: [
    {
      provide: MarsComponent,
      useExisting: forwardRef(() => RoverComponent)
    }
  ]
})
export class RoverComponent implements MarsComponent {
  render(rendererCanvas: ElementRef<HTMLCanvasElement>): void {
    const context = rendererCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    const centerX = rendererCanvas.nativeElement.width / 2;
    const centerY = rendererCanvas.nativeElement.height / 2;
    const radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }
}
