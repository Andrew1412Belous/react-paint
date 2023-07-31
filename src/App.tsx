import React from 'react';

import './styles/App.scss';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';

function App() {
	return (
		<div className="app">
			<Toolbar />
			<SettingBar />
			<Canvas />
		</div>
	);
}

export default App;
