






import React, { useState } from 'react';
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    consent: false
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = signUpFormValidation(formData);
    setFormErrors(errors || {});
  };

  return (
    <div id="main">
      <h2>Sign up form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="consent">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
            />
            I agree to the terms and conditions
          </label>
          {formErrors.consent && <span className="error">{formErrors.consent}</span>}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default App;



// import React from 'react'
// import '../styles/App.css';


// const App = () => {
  
//   return (

//   )
// }


// export default App;
