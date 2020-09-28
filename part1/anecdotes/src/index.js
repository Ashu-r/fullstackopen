import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const MostVotes = ({ points, anecdotes }) => {
	let max = Math.max(...points);
	if (max) {
		return (
			<div>
				<h2>Anecdote with most votes</h2>
				<h4>{anecdotes[points.indexOf(max)]}</h4>
				has {max} votes.
			</div>
		);
	} else {
		return <h4>No anecdote has been voted so far.</h4>;
	}
};

const App = (props) => {
	const [ selected, setSelected ] = useState(0);
	const [ points, setpoints ] = useState(Array(anecdotes.length).fill(0));

	const vote = () => {
		const copy = [ ...points ];
		copy[selected] += 1;
		setpoints(copy);
	};

	const nextAnecdote = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<div>
				<h4>{props.anecdotes[selected]}</h4>
				has {points[selected]} votes.
			</div>
			<div>
				<button onClick={vote}>vote</button>
				<button onClick={nextAnecdote}>Next anecdote</button>
			</div>
			<MostVotes points={points} anecdotes={anecdotes} />
		</div>
	);
};

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
