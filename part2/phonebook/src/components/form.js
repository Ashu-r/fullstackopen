import React from 'react';

const AddPersonForm = ({ addName, newName, handleNumberChange, handleNameChange, newNumber }) => {
	// console.log(newName, newNumber);
	return (
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
	);
};

export default AddPersonForm;
