import React from 'react';
import Specials from './4specials';

export const navigateToSpecials = () => {
  const specialsDiv = document.getElementById('specials');
  if (specialsDiv) {
    window({
      specialsDiv,
    });
  }
};

export default function Header() {
  
  return (
    <div style={{ position: 'relative' }}>
      <h1 style={{ fontSize: '300%', fontStyle: 'italic' }}>The Filthy Mudbucket</h1>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '200%', fontStyle: 'italic' }}>"We don't have crabs and don't check our health score!™"</p>
        <p>7196 E. Ann Street</p>
        <p>Ringgold, GA 30736</p>
        <p>(859) 867-5309</p>
        <a href="#specials" style={{ fontSize: '200%' }}>Specials!</a>
        <br></br>
        <a href="#" style={{ fontSize: '200%' }}>Online Order!</a>
      </div>
      <iframe
          title="Google Map"
          width="400"
          height="300"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA19yqF0VBdJPBdmCRmfUDaVBOdPPIdnuU&q=Space+Needle,Seattle+WA"> 
        </iframe>
      <div style={{ position: 'absolute', top: 10, right: 0 }}>

      </div>
    </div>
  );
}