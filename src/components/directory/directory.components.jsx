import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.components";

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: "Hats",
					id: 1,
					imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
				},
				{
					title: "Jackets",
					id: 2,
					imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
				},
				{
					title: "Sneakers",
					id: 3,
					imageUrl: "https://i.ibb.co/0jqHpnp/jackets.png",
				},
				{
					title: "Womens",
					id: 4,
					imageUrl: "https://i.ibb.co/GCCdy8t/jackets.png",
					size: "large",
				},
				{
					title: "Mens",
					id: 5,
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
				},
			],
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ title, id, imageUrl,size }) => {
					return <MenuItem title={title} imageUrl={imageUrl} key={id} size={size} />;
				})}
			</div>
		);
	}
}

export default Directory;
