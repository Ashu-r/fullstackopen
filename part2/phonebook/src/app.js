import React, { useState, useEffect } from 'react';
import AddPersonForm from './components/form';
import Filter from './components/filter';
import Persons from './components/personsData';
import personService from './services/persons';
import Notification from './components/notification';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ display, setDisplay ] = useState(null);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ message, setMessage ] = useState(null);
	useEffect(() => {
		personService.getAll().then((initialPhonebook) => {
			console.log('persons acquired');
			setPersons(initialPhonebook);
		});
	}, []);

	const addName = (event) => {
		event.preventDefault();
		const currentPerson = persons.find((p) => p.name === newName);
		if (!currentPerson) {
			const newPersonObj = {
				name: newName,
				number: newNumber
			};

			personService.create(newPersonObj).then((response) => {
				setPersons(persons.concat(response));
				setNewName('');
				setNewNumber('');
			});

			setMessage(`Added ${newPersonObj.name}`);
			setTimeout(() => {
				setMessage(null);
			}, 5000);

			// setPersons(persons.concat(newPersonObj));
		} else {
			const updatePrompt = window.confirm(
				`${newName} is already added to the phonebook, replace old number with new one?`
			);
			if (updatePrompt) {
				const updatedPerson = { ...currentPerson, number: newNumber };
				personService
					.updateNumber(currentPerson.id, updatedPerson)
					.then((response) => {
						setPersons(persons.map((person) => (person.id !== currentPerson.id ? person : response)));
					})
					.catch((error) => {
						setMessage(`information of ${newName} has already removed from server`);
						setTimeout(() => {
							setMessage(null);
						}, 5000);
					});
			}
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
			<Notification message={message} />
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
