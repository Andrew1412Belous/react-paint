import Tool from './Tool';

export default class Line extends Tool {
	private mouseDown: boolean = false;
	private startX: number = 0;
	private startY: number = 0;
	private width: number = 0;
	private height: number = 0;
	private saved: string = '';
	private name: string;

	constructor(canvas: HTMLCanvasElement | null) {
		super(canvas);
		this.listen();
		this.name = 'Line';
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
			this.draw(event.offsetX, event.offsetY);
		}
	}

	draw(x: number, y: number) {
		const img = new Image();
		img.src = this.saved;
		img.onload = async () => {
			if (this.canvas && this.ctx) {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
				this.ctx.beginPath();
				this.ctx.moveTo(this.startX, this.startY);
				this.ctx.lineTo(x, y);
				this.ctx.stroke();
			}
		};
	}
}
