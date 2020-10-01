import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Find = ({ countries, setShowCountries }) => {
	if (countries) {
		const displayCountries = (event) => {
			const searchFilter = countries.filter(
				(country) => country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
			);
			setShowCountries(searchFilter);
		};

		return (
			<p>
				find countries <input type="text" onChange={displayCountries} />
			</p>
		);
	} else {
		return <p>find countries Loading...</p>;
	}
};

const CountryResult = ({ showCountries }) => {
	if (showCountries.length > 10) {
		return <div>Too many matches, please specify exact name</div>;
	} else if (showCountries.length === 1) {
		console.log(showCountries[0]);
		const displayCountry = showCountries[0];
		return (
			<div>
				<div>
					<h1>{displayCountry.name}</h1>
				</div>
				<div>
					<p>Capital: {displayCountry.capital}</p>
					<p>Population: {displayCountry.population}</p>
				</div>
				<div>
					<h2>Languages</h2>
					<ul>{displayCountry.languages.map((language) => <li key={language.name}>{language.name}</li>)}</ul>
				</div>
				<div>
					<img src={displayCountry.flag} width="400" />
				</div>
			</div>
		);
	} else {
		return <div>{showCountries.map((country) => <p key={country.name}>{country.name}</p>)}</div>;
	}
};

const App = () => {
	const [ countries, setCountries ] = useState();
	const [ showCountries, setShowCountries ] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
			setCountries(response.data);
		});
	}, []);
	return (
		<div>
			<Find countries={countries} setShowCountries={setShowCountries} />
			<CountryResult showCountries={showCountries} />
		</div>
	);
};

export default App;
