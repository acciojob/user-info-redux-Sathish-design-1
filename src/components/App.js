import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../actions';

const App = () => {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div id="main">
      <h1>User Information</h1>
      
      <div className="input-section">
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => dispatch(updateName(e.target.value))} 
        />
        <br />
        <label>Email: </label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => dispatch(updateEmail(e.target.value))} 
        />
      </div>

      <div className="output">
        <p>Current values in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;