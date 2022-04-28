import React from 'react'
import BioRow from '../components/BioRow';

import '../styles/directors.less';

export default function Directors() {
  return (
    <div className='directors'>
      <h1>Directors</h1>
      <BioRow 
        image='https://picsum.photos/1024'
        title='John Doe - Director of Whatever'
        bioText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
      />
      <BioRow 
        image='https://picsum.photos/1024' 
        imageAlign='right'
        title='Jane Doe - Director of Who Cares For A Crowd'
        bioText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
      />
    </div>
  )
}
