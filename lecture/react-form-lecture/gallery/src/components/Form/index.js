import React from 'react';

function Form(props) {
  console.log(props);
  return (
    <div>
      <input type="text" onChange={props.onChangeHandler} />
      <button onClick={props.urlHandler}>Submit</button>
    </div>
  );
}

export default Form;
