import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ good, neutral, bad }) => {
	if (good || neutral || bad) {
		// total score
		const total = good + neutral + bad;

		// 1 score for good, 0 score for neutral and -1 score for bad
		const average = (good - bad) / total;

		// percentage of good votes
		const positive = good / total * 100;

		return (
			<div>
				<h2>statistics</h2>
				<Statistic text="good" value={good} />

				<Statistic text="neutral" value={neutral} />

				<Statistic text="bad" value={bad} />

				<Statistic text="total" value={total} />
				<Statistic text="average" value={average} />
				<Statistic text="positive" value={positive + ' %'} />
			</div>
		);
	} else {
		return (
			<div>
				<h4>No feedback given</h4>
			</div>
		);
	}
};

const Statistic = (props) => {
	return (
		<div>
			<p>
				{props.text}: {props.value}
			</p>
		</div>
	);
};

const Button = ({ btnClick, text }) => {
	return (
		<div>
			<button onClick={btnClick}>{text}</button>
		</div>
	);
};

const App = () => {
	// save clicks of each button to own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);

	return (
		<div>
			<div>
				<h2>Give feedback</h2>
				<Button btnClick={() => setGood(good + 1)} text="good" />
				<Button btnClick={() => setNeutral(neutral + 1)} text="neutral" />
				<Button btnClick={() => setBad(bad + 1)} text="bad" />
			</div>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
