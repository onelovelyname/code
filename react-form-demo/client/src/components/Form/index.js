import React from 'react';

function Form(props) {
  return (
    <div className="Form">
      <h1>Add your image</h1>
      <input
        type="text"
        placeholder="Enter your image's link..."
        onChange={props.addImageHandler}
      />
      <button type="button" onClick={props.submitImage}>
        Add
      </button>
    </div>
  );
}

export default Form;