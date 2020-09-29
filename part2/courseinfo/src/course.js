import React from 'react';

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

export default Course;
