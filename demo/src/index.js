import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// function Component
// function App() {
//   return (
//     <div className="App">
//     	<div>
// 	    	<input type="text" placeholder="What's your favorite color?" id="color-input"/>
// 	    	<button id="submit-button">Submit</button>
//     	</div>
//     	<div>
// 	    	<img src="./sunflower.jpeg" />
// 	    	<img src="./sunflower.jpeg" />
// 	    	<img src="./sunflower.jpeg" />
//     	</div>
//     </div>
//   );
// }

// class Component
class App1 extends React.Component {
	render() {
	  return (
	    <div className="App">
	    	<h1>App1</h1>
	    	<SearchBar />
	    	<div>
	    		<Photo nature="sunflower" />
	    		<Photo nature="rose" />
	    		<Photo nature="olive" />
	    	</div>
	    </div>
	  );
	}
}

class Photo extends React.Component {
	state = {
		photoSrc: this.props.nature + ".jpeg"
	}
	render() {
		return (
		// JSX
			<div>
		    	<img src={this.state.photoSrc} />
		    	<p>{this.props.nature}</p>	    			
			</div>
			);
	}
}

class SearchBar extends React.Component {
	state = {
		inputValue: ""
	}
	
	render() {
		return (
	    	<div>
		    	<input type="text" placeholder="What's your favorite color?" id="color-input"/>
		    	<button id="submit-button">Submit</button>
	    	</div>
			);
	}
}

// // function Component
// function Welcome1(props) {
// 	console.log(props);
// 	return <h2>Welcome to our website {props.name}! We're in {props.area}</h2>
// }

// // class Component
// class Welcome extends React.Component {
// 	render() {
// 		console.log("Welcome props: ", this.props);
// 		return <h1>Hello {this.props.name}</h1>;
// 	}
// }

ReactDOM.render(
	<App1 />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
