import React from 'react';

class Photo extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
		        <img src={this.props.src} alt="dolphin"/>
			</div>
			);
	}
}

export default Photo;