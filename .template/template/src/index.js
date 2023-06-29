import React from 'react';
import ReactDOM from 'react-dom/client';

axios.get(`https://www.jsonkeeper.com/b/MDXW`)
.then(response => {
  var data = response.data;})
import axios from 'axios';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  </React.StrictMode>
);

