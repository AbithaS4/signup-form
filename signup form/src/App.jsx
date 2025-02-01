import { useState } from 'react';
import './App.css';

function App () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mailid, setMailid] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e, action) => {
    e.preventDefault();  

 
    if (!username || !password || !mailid) {
      setError('All fields are required');
      return;
    }

    
    if (action === 'signup') {
      console.log('Signing up:', { username, password, mailid });
      setError('');  
    } else if (action === 'signin') {
      console.log('Signing in with:', { username, password });
      setError('');  
    }
  };

  return (  
    <div className="container">
      <div >
        <h1 style={{ color: 'white' }}>Sign In</h1>
        

        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <label htmlFor="user" style={{ color: "aqua" }}>Username :  </label>
          
        
        <input type="text" 
        placeholder="username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <br />

        <label htmlFor="password" style={{ color: 'aquamarine' }}>
          Password : </label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="mailid" style={{ color: 'aquamarine' }}>
          Mail ID : </label>
        
        <input type="text"
        placeholder="mailid"
        value={mailid}
        onChange={(e) => setMailid(e.target.value)}
        />
        <br />
        <br />

        
        <button onClick={(e) => handleSubmit(e, 'signup')} style={{ backgroundColor: 'black', color: 'white', marginTop: "80px"  }}>
          Sign Up
        </button>
        
        <button onClick={(e) => handleSubmit(e, 'signin')} style={{ backgroundColor: 'red', color: 'white', marginLeft: '90px' }}> Sign In  </button>
      </div>
    </div>
  );
}

export default App;
