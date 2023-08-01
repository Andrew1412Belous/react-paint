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
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ToolState();
