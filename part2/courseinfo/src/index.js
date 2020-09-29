import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	);
};

const Header = ({ course }) => {
	return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
	const total = course.parts.reduce((sum, item) => sum + item.exercises, 0);
	return <h5>Number of exercises {total}</h5>;
};

const Part = ({ parts }) => {
	return parts.map((part) => (
		<p key={part.id}>
			{part.name} {part.exercises}
		</p>
	));
};

const Content = ({ course }) => {
	return (
		<div>
			<Part parts={course.parts} />
		</div>
	);
};

const App = () => {
	const courses = [
		{
			name: 'Half Stack application development',
			id: 1,
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3
				},
				{
					name: 'Redux',
					exercises: 11,
					id: 4
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	];
	return courses.map((singleCourse) => <Course key={singleCourse.id} course={singleCourse} />);
};

ReactDOM.render(<App />, document.getElementById('root'));