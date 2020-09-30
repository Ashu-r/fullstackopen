import React, { useState } from 'react';
import AddPersonForm from './components/form';
import Filter from './components/filter';
import Persons from './components/persons';

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]);
	const [ display, setDisplay ] = useState(null);
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

	const filterByName = (event) => {
		const filterated = persons.filter(
			(person) => person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
		);
		setDisplay(event.target.value.length ? filterated : null);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filterByName={filterByName} />
			<h3>Add New</h3>
			<AddPersonForm
				addName={addName}
				newName={newName}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
				handleNameChange={handleNameChange}
			/>

			<h2>Numbers</h2>
			<Persons display={display} persons={persons} />
		</div>
	);
};

export default App;
