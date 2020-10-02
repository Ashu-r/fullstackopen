import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Find from './components/find';
import { CountryResult } from './components/CountryResult';

const App = () => {
	const [ countries, setCountries ] = useState();
	const [ showCountries, setShowCountries ] = useState(null);
	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
			setCountries(response.data);
		});
	}, []);

	return (
		<div>
			<Find countries={countries} setShowCountries={setShowCountries} />
			<CountryResult setShowCountries={setShowCountries} showCountries={showCountries} />
		</div>
	);
};

export default App;
