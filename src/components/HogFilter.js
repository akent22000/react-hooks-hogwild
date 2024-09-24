import React, { useState } from "react";

function HogFilter({ isGreased, onGreasedClick }) {

	return <div >
		<button style={{ backgroundColor: 'pink', fontSize: '16px', padding: '10px' }}
			onClick={onGreasedClick}>
			{isGreased ? "Greased" : "Non Greased"}
		</button>
	</div>

}

export default HogFilter;