import React, { useState } from 'react';
import '../styles/App.css';
import { validate } from '../utils/validation';

const App = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [consent, setConsent] = useState(false);
const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
e.preventDefault();
const userData = { name, email, password };
const validationErrors = validate(userData);
setErrors(validationErrors);
  if (!Object.keys(validationErrors).length) {
  console.log('Submitting form...');
  console.log(userData);
}
};

return (
<div id="main">
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="name">Name:</label>
<input
id="name"
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
{errors.name && <p className="error">{errors.name}</p>}
</div>
<div>
<label htmlFor="email">Email:</label>
<input
id="email"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
{errors.email && <p className="error">{errors.email}</p>}
</div>
<div>
<label htmlFor="password">Password:</label>
<input
id="password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
{errors.password && <p className="error">{errors.password}</p>}
</div>
<div>
<input
id="consent"
type="checkbox"
checked={consent}
onChange={(e) => setConsent(e.target.checked)}
/>
<label htmlFor="consent">I agree to the terms and conditions.</label>
</div>
<button type="submit">Signup</button>
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
