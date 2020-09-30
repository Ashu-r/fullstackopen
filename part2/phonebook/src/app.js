import React, { useState } from 'react';

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');

	const addName = (event) => {
		event.preventDefault();
		if (persons.map((person) => person.name).indexOf(newName) === -1) {
			const newPersonObj = {
				name: newName,
				number: newNumber
			};
			setPersons(persons.concat(newPersonObj));
		} else {
			alert(`${newName} is already added to the phonebook`);
		}
		setNewName('');
		setNewNumber('');
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					name:
					<input required value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number:
					<input required value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default App;
