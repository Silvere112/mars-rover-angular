import { Directive, ElementRef, forwardRef } from '@angular/core';
import { MarsElement } from "../map/mars.interface";

@Directive({
  selector: 'mr-rover',
  providers: [
    {
      provide: MarsElement,
      useExisting: forwardRef(() => RoverDirective)
    }
  ]
})
export class RoverDirective implements MarsElement {

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
