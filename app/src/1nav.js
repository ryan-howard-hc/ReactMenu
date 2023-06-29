import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', background: 'aquamarine' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: '20px' }}><a href="#">Home</a></li>
        <li style={{ marginRight: '20px' }}><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
