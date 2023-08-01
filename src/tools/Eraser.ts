import Tool from './Tool';

export default class Eraser extends Tool {
	private mouseDown: boolean = false;

	constructor(canvas: HTMLCanvasElement | null) {
		super(canvas);
		this.listen();
	}

	listen() {
		if (this.canvas) {
			this.canvas.onmouseup = this.mouseUpHandler.bind(this);
			this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
			this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		}
	}

	mouseUpHandler(event: MouseEvent) {
		this.mouseDown = false;
	}

	mouseDownHandler(event: MouseEvent) {
		this.mouseDown = true;
		this.ctx?.beginPath();
		this.ctx?.moveTo(event.offsetX, event.offsetY);
	}

	mouseMoveHandler(event: MouseEvent) {
		if (this.mouseDown) {
			this.draw(event.offsetX, event.offsetY);
		}
	}

	draw(x: number, y: number) {
		if (this.ctx) {
			this.ctx.strokeStyle = 'white';
			this.ctx.lineWidth = 10;
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
		}
	}
}
