import "./styles.css";
window.addEventListener('load', () => {
  const header = document.createElement('h1');

  const body = document.querySelector('body');
  body.prepend(header);

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  ctx.fillStyle = 'gray'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
})