import { DrawableObject } from './drawable_object';

export class Circle implements DrawableObject {
  constructor(
    public id: string,
    public x: number,
    public y: number,
    public color: string,
    public radius: number
  ) {}

  draw(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    
    ctx.beginPath();
    ctx.arc(this.x * width, this.y * height, this.radius * width, 0, 2 * Math.PI);
    ctx.fill()
  }
}
