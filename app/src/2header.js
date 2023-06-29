import React from 'react';
import Specials from './4specials';
export default function Header() {
    
    return (
        <div>
        <h1 style={{ fontSize: '300%', fontStyle: 'italic' }}>The Filthy Mudbucket</h1>
        <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '200%', fontStyle: 'italic' }}>" We dont have crabs and don't check our health score!™ "</p>
        <p>7196 E. Ann Street</p>
        <p>Ringgold, GA 30736</p>
        <p>(859) 867-5309</p>
        <a href="#" style={{ fontSize: '200%' }}>Specials!</a>
        <br></br>
        <a href="#" style={{ fontSize: '200%' }}>Online Order!</a>
        </div>
      </div>
    );
}