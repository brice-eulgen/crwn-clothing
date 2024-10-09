import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.components";
import SECTIONS_DATA from "../../data/section.data";

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: SECTIONS_DATA,
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ title, id, imageUrl, size }) => {
					return (
						<MenuItem title={title} imageUrl={imageUrl} key={id} size={size} />
					);
				})}
			</div>
		);
	}
}

export default Directory;
