import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	// save clicks of each button to own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);
	const total = good + neutral + bad;
	const average = (good - bad) / total;
	const positive = good / total * 100;

	return (
		<div>
			<div>
				<h2>Give feedback</h2>
				<button onClick={() => setGood(good + 1)}>good</button>
				<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
				<button onClick={() => setBad(bad + 1)}>bad</button>
			</div>
			<div>
				<h2>statistics</h2>
				<p>good: {good}</p>
				<p>neutral: {neutral}</p>
				<p>bad: {bad}</p>
				<p>total: {total}</p>
				<p>average: {average ? average : 0}</p>
				<p>positive: {positive ? positive : 0}%</p>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
