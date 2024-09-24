import React, { useState } from "react";
import HogList from "./HogList";
import HogItems from "./HogItem";
import HogFilter from "./HogFilter";
import Nav from "./Nav";
import hogs from "../porkers_data";


function App() {
	// const [hogs, setHogs] = useState(hogs);




	return (
		<div className="App">
			<Nav />
			<HogList
				hogs={hogs}
			/>
		</div>
	);
}

export default App;
