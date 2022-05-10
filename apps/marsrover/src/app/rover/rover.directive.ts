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

    const base = new Image();
    base.src = "assets/Hull_01.png";
    base.onload = function () {
      context.drawImage(base, 45, 10, base.width, base.height, 0, 0, base.width, base.height);
    }


    const weapon = new Image();
    weapon.src = "assets/Gun_03_B.png";
    weapon.onload = function () {
      context.drawImage(weapon, 0, 0, weapon.width, weapon.height, 50, 110, weapon.width, weapon.height);
    }

  }
}
