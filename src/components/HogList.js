import React, { useState } from "react";
import HogItem from "./HogItem";
import HogFilter from "./HogFilter";


function HogList({ hogs }) {

	const [isGreased, setIsGreased] = useState(false);

	function onGreasedClick() {
		setIsGreased((isGreased) => !isGreased);
	}

	const filteredCategoryDisplay = hogs
		.filter(hog => {
			if (isGreased === hog.greased) return true;
			return hog.greased === isGreased;
		})

	return (
		<div>
			<div style={{ padding: '20px' }}>
				<HogFilter
					isGreased={isGreased}
					onGreasedClick={onGreasedClick}
				/>
			</div>

			<div className="ui cards">
				{filteredCategoryDisplay.map((hog) => (
					<HogItem
						key={hog.name}
						name={hog.name}
						specialty={hog.specialty}
						greased={hog.greased}
						weight={hog.weight}
						image={hog.image}
						medal={hog.medal}

					/>))}

			</div>
		</div>
	);
}

export default HogList;