import personService from '../services/persons';
import React from 'react';

const Persons = ({ display, persons, setPersons }) => {
	const deletePerson = (id) => {
		personService.deleteContact(id).then(setPersons(persons.filter((person) => person.id !== id)));
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Number</th>
					</tr>
				</thead>
				<tbody>
					{(display ? display : persons).map((person) => (
						<tr key={person.name}>
							<td>{person.name}</td>
							<td>{person.number}</td>
							<td>
								<button
									onClick={() =>
										window.confirm(`Delete ${person.name}?`)
											? deletePerson(person.id)
											: console.log('delete canceled')}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Persons;
