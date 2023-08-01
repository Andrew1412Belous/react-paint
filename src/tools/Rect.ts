import Tool from './Tool';

export default class Rect extends Tool {
	private mouseDown: boolean = false;
	private startX: number = 0;
	private startY: number = 0;
	private width: number = 0;
	private height: number = 0;
	private saved: string = '';

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

		this.startX = event.offsetX;
		this.startY = event.offsetY;
		this.saved = this.canvas ? this.canvas?.toDataURL() : '';
	}

	mouseMoveHandler(event: MouseEvent) {
		if (this.mouseDown) {
			let currentX = event.offsetX;
			let currentY = event.offsetY;
			this.width = currentX - this.startX;
			this.height = currentY - this.startY;

			this.draw(this.startX, this.startY, this.width, this.height);
		}
	}

	draw(x: number, y: number, w: number, h: number) {
		const img = new Image();
		img.src = this.saved;
		img.onload = () => {
			if (this.canvas && this.ctx) {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
				this.ctx.beginPath();
				this.ctx.rect(x, y, w, h);
				this.ctx.fill();
				this.ctx.stroke();
			}
		};
	}
}
