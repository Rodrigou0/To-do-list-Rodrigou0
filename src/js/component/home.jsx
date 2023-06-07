import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Todolist from "./todolist.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div id="box">
				<Todolist/>
			</div>
			<div className="page1"></div>
			<div className="page2"></div>
			<div className="page3"></div>
		</div>
	);
};

export default Home;
