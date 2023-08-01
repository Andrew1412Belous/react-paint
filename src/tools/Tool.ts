export default class Tool {
	protected canvas: HTMLCanvasElement | null;
	protected ctx: CanvasRenderingContext2D | null;

	constructor(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas;
		this.ctx = canvas ? canvas.getContext('2d') : null;
	}

	destroyEvents() {
		if (this.canvas) {
			this.canvas.onmouseup = null;
			this.canvas.onmousemove = null;
			this.canvas.onmousedown = null;
		}
	}
}
