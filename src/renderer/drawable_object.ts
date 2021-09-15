export interface DrawableObject {
  id: string;
  draw(ctx: CanvasRenderingContext2D, width: number, height: number): void;
}