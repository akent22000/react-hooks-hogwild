import React, { useState } from "react";

function HogItem({ name, specialty, greased, weight, medal, image }) {

	return (
		<div class="ui card">
			<div class="image">
				<img src={image} alt={name} />
			</div>
			<div class="content">
				<a class="header">Piggy name: {name}</a>
				<div class="meta">
					<span class="date">Specialty: {specialty}</span>
				</div>
				<div class="description">
					{greased}
				</div>
			</div>
			<div class="extra content">
				<p>Weight: {weight}</p>
				<p>Medal: {medal}</p>
			</div>
		</div>

		// <div class="ui card">
		// 	<div className="ui eight wide column">{name}</div>
		// 	<div className="ui eight wide column">{specialty}</div>
		// </div >
	);
}

export default HogItem;


