import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Pokemon = () => {
	const [items, setItems] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("https://pokeapi.co/api/v2/ability/1/")
			.then((res) => res.json())
			.then((json) => {
				setItems(json);

				setDataIsLoaded(true);
				console.log(items);
			});
	};

	return (
		<div className="main_div">
			<form className="main_div" onSubmit={handleSubmit}>
				<button>Get Pokemon</button>
			</form>
			<div>
				<h1> Fetch Pokemon </h1>{" "}
			</div>
			{items.generation && (
				<div>
					<p>
						<b>Name:</b> {items.name}
					</p>
					<p>
						<b>Generation:</b> {items.generation.name}
					</p>
					<p>
						<b>URL:</b> {items.generation.url}
					</p>
				</div>
			)}

			<div>
				<Link to="/">Visit Home</Link>
			</div>
		</div>
	);
};

export default Pokemon;
