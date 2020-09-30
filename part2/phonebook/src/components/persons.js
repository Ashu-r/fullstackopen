import React from 'react';

const Persons = ({ display, persons }) => {
	return (
		<div>
			{(display ? display : persons).map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default Persons;
