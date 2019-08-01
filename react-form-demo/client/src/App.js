import React from 'react';
import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      currentImage: ''
    };

    this.addImageHandler = this.addImageHandler.bind(this);
    this.submitImage = this.submitImage.bind(this);
  }

  addImageHandler(event) {
    var value = event.target.value;
    this.setState({ currentImage: value });
  }

  submitImage(event) {
    event.preventDefault();
    this.setState({ image: this.state.currentImage });
  }

  render() {
    var image = this.state.image;
    var currentImage = this.state.currentImage;

    return (
      <div className="App">
        <Form
          addImageHandler={this.addImageHandler}
          submitImage={this.submitImage}
          currentImage={currentImage}
        />

        <Gallery image={image} />
      </div>
    );
  }
}

export default App;
