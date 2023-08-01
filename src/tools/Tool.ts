export default class Tool {
	protected canvas: HTMLCanvasElement | null;
	protected ctx: CanvasRenderingContext2D | null;

	constructor(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas;
		this.ctx = canvas ? canvas.getContext('2d') : null;
	}

	set fillColor(color: string) {
		if (this.ctx) {
			console.log(this.ctx);
			console.log(30);
			this.ctx.fillStyle = color;
		}
	}

	set strokeColor(color: string) {
		if (this.ctx) {
			console.log(this.ctx);
			console.log(30);
			this.ctx.strokeStyle = color;
		}
		// if (this.ctx) this.ctx.strokeStyle = color;
	}

	set lineWidth(width: string) {
		if (this.ctx) this.ctx.lineWidth = Number(width);
	}

	destroyEvents() {
		if (this.canvas) {
			this.canvas.onmouseup = null;
			this.canvas.onmousemove = null;
			this.canvas.onmousedown = null;
		}
	}
}
