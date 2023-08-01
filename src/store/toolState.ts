import { makeAutoObservable } from 'mobx';
import Tool from '../tools/Tool';

class ToolState {
	tool: Tool | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	setTool(tool: Tool) {
		this.tool = tool;
	}

	setFillColor(color: string) {
		if (this.tool) {
			console.log(10);
			this.tool.fillColor = color;
		}
	}

	setStrokeColor(color: string) {
		if (this.tool) {
			console.log(20);
			this.tool.strokeColor = color;
		}
	}

	setLineWidth(width: string) {
		if (this.tool) this.tool.lineWidth = width;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ToolState();
