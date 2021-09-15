import { DrawableObject } from './drawable_object';

export class Canvas2dRenderer {
  private objects: Map<string, DrawableObject> = new Map();

  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number
  ) {
    this.clear();
  }

  draw() {
    for (const object of this.objects.values()) {
      object.draw(this.ctx, this.width, this.height);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  set(object: DrawableObject): void {
    this.objects.set(object.id, object);
  }

  delete(id: string): void {
    this.objects.delete(id);
  }
}
