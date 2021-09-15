import { Canvas2dRenderer } from './renderer/canvas_2d_renderer';
import { Circle } from './renderer/circle';
import { DrawableObject } from './renderer/drawable_object';
import './styles.css';
window.addEventListener('load', () => {
  const header = document.createElement('h1');

  const body = document.querySelector('body');
  body.prepend(header);

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = 1000;
  canvas.height = 1000;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  const renderer = new Canvas2dRenderer(ctx, canvas.width, canvas.height);
  const circle = new Circle('circly', 0.5, 0.5, 'blue', 0.025);
  renderer.set(circle);
  ctx.fillStyle = 'black';
  renderer.draw();
  
  setInterval(() => {
    if (circle.x > 1) {
      circle.x = 0;
    } else {
      circle.x += 0.005;
    }
  }, 0);
  
  setInterval(() => {
    renderer.clear();
    renderer.draw();
  }, 0);


  ////
});
