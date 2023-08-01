import React from 'react';

import '../styles/toolbar.scss';
import toolState from '../store/toolState';

const SettingBar: React.FC = () => {
	return (
		<div className="setting-bar">
			<label htmlFor="line-width">Line thickness</label>
			<input
				onChange={(e) => toolState.setLineWidth(e.target.value)}
				style={{ margin: '0 10px' }}
				id="line-width"
				type="number"
				min={1}
				defaultValue={1}
			/>
			<label htmlFor="stroke-color">Stroke color</label>
			<input
				onChange={(e) => toolState.setStrokeColor(e.target.value)}
				id="stroke-color"
				type="color"
			/>
		</div>
	);
};

export default SettingBar;
