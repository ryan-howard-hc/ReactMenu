import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  </React.StrictMode>
);

import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';   
import { getLocalStorage } from '../utils/localStorage';   

function displayMenu () {
    const ENDPOINT = 'MEALS';
    const [meal, setMenu] = useState([menuItems]);
    const [special, dailySpecials] = useState([specialItems]);

    useEffect(() => {
        let data = getLocalStorage(ENDPOINT);
        if (data.length > 0) {
            setMenu=data;
            } else {
        getData(ENDPOINT)
        .then((data) => {
            setMenu(data);
             getLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

      useEffect(() => {
        let data = getLocalStorage(ENDPOINT);
        if (data.length > 0) {
            dailySpecials=data;
            } else {
        getData(ENDPOINT)
        .then((data) => {
            dailySpecials(data);
            getLocalStorage(ENDPOINT, data);
        })
    }
  }, []);


    return (
      <div>
        <h2>Menu:</h2>
        {menuItems.map((meal) => (
          <div key={meal.id} meal={meal}>

            <div class = "card"> Name: {meal.name}</div>

            <div class = "card"> Price: {meal.price}</div>

            <div class = "card"> Spiciness: {meal.spicinessIcon}</div>

            <div class = "card"> Vegan: {meal.veganIcon}</div>

            <div class = "card"> Substitution Options: {meal.substitutionOptions}</div>

            <div class = "card"> Description: {item.description}</div>

          </div>
        ))};
        <h2>Daily Specials:</h2>
        {specialItems.map((special) => (
          <div key={special.name}>

            <div class = "card"> Name: {special.name}</div>

            <div class = "card"> Price: {special.price}</div>

            <div class = "card"> Description: {special.description}</div>

          </div>
        ))}
</div>
);
};