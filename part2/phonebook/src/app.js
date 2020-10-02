import React, { useState, useEffect } from 'react';
import AddPersonForm from './components/form';
import Filter from './components/filter';
import Persons from './components/personsData';
import personService from './services/persons';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ display, setDisplay ] = useState(null);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');

	useEffect(() => {
		personService.getAll().then((initialPhonebook) => {
			console.log('persons acquired');
			setPersons(initialPhonebook);
		});
	}, []);

	const addName = (event) => {
		event.preventDefault();
		if (persons.map((person) => person.name).indexOf(newName) === -1) {
			const newPersonObj = {
				name: newName,
				number: newNumber
			};

			personService.create(newPersonObj).then((response) => {
				setPersons(persons.concat(response));
				setNewName('');
				setNewNumber('');
			});

			// setPersons(persons.concat(newPersonObj));
		} else {
			alert(`${newName} is already added to the phonebook`);
		}
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
			<Persons display={display} setPersons={setPersons} persons={persons} />
		</div>
	);
};

export default App;
