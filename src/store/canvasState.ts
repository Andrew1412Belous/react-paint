import { makeAutoObservable } from 'mobx';

class CanvasState {
	canvas: HTMLCanvasElement | null = null;
	undoList: string[] = [];
	redoList: string[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	setCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}

	pushToUndo(data: string) {
		this.undoList.push(data);
	}

	pushToRedo(data: string) {
		this.redoList.push(data);
	}

	undo() {
		if (this.canvas) {
			let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

			if (this.undoList.length > 0) {
				let dataUrl = this.undoList.pop() as string;
				this.redoList.push(this.canvas.toDataURL());

				let img = new Image();
				img.src = dataUrl;

				img.onload = () => {
					if (this.canvas) {
						ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
						ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
					}
				};
			} else {
				ctx && ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			}
		}
	}

	redo() {
		if (this.canvas) {
			let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

			if (this.redoList.length > 0) {
				let dataUrl = this.redoList.pop() as string;
				this.undoList.push(this.canvas.toDataURL());

				let img = new Image();
				img.src = dataUrl;

				img.onload = () => {
					if (this.canvas) {
						ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
						ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
					}
				};
			}
		}
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CanvasState();
