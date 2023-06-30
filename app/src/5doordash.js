import React from "react";
import ReactDOM from 'react-dom';


export default function Doordash() {
    return (
        <div>

        </div>
    );
}

const currentPath = window.location.pathname;
if (currentPath === 'OrderOnline') {
  ReactDOM.render(<Doordash />, document.getElementById('root'));
}

