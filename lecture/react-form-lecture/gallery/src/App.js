import React from 'react';
import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',

      currentImage:
        'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    };
    this.changeUrlHandler = this.changeUrlHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  changeUrlHandler() {
    this.setState({
      imgUrl: this.state.currentImage
    });
  }

  onChangeHandler(event) {
    var value = event.target.value;
    this.setState({ currentImage: value });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Form
          urlHandler={this.changeUrlHandler}
          onChangeHandler={this.onChangeHandler}
        />
        <Gallery imageUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
