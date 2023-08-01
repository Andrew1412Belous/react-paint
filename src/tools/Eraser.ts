import Brush from './Brush';

export default class Eraser extends Brush {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(canvas: HTMLCanvasElement | null) {
		super(canvas);
	}

	draw(x: number, y: number) {
		if (this.ctx) {
			this.ctx.strokeStyle = 'white';
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
		}
	}
}
