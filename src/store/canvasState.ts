import { makeAutoObservable } from 'mobx';

class CanvasState {
	canvas: HTMLCanvasElement | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	setCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CanvasState();
