import React from 'react';
import ReactDOM from 'react-dom';

// use CSS from index.css file you've created
import './index.css';
// don't worry about this line for now
import * as serviceWorker from './serviceWorker';

/*
// SECTION 1: Creating the Page Layout //

1. Add a heading and title to your page.
2. Add an input field and button to your page.
3. Add three photos to your page. Give each photo a caption. 
4. Style your photos with border and padding.

// SECTION 2: Using Nested Components //
Now that you have your layout built, change your layout to use nested components. 
1. Put your photos into their own React Components (called Photo) and include them within the App Component.
- Each photo's URL should still be declared within the App Component and passed to the child Photo as this.props
- Each caption should also be declared within the App Component and passed to the child Photo as this.props
2. Put your input field and button into its own React Component called SearchBar and include it within the AppComponent.

// EXTRA CREDIT: Add a video from Youtube to your page //
1. Go to Youtube and find the Embed code
2. Figure out how to add and render this code within your React Application
*/


function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Hello everyone!
        </h1>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
