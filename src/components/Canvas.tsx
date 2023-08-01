import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import '../styles/canvas.scss';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';

const Canvas: React.FC = observer(() => {
	const canvasRef = useRef<any>();

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current);
		toolState.setTool(new Brush(canvasRef.current));
	}, []);

	const mouseDownHandler = () => {
		canvasState.pushToUndo(canvasRef.current.toDataURL());
	};

	return (
		<div className="canvas">
			<canvas
				onMouseDown={() => mouseDownHandler()}
				ref={canvasRef}
				width={600}
				height={400}
			></canvas>
		</div>
	);
});

export default Canvas;
