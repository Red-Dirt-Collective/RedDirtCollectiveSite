import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router } from 'components/Router';


import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/onboard">Join!</Link>
        <Link to="/members">Members</Link>
      </nav>
      <div className="content">
     
        <React.Suspense fallback={<em>Loading...</em>}>
        
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
