# Restaurant Menu Pseudo
## Requirements
MoSCoW
1. MUST
- WIREFRAMES for website design       DONE
- Basic information regarding the name, address, and hours of restaurant                         DONE
- BOOTSTRAP via NPM                   DONE
- API retrieval through AXIOS         DONE
- DYNAMIC menu - SECTIONS such as appetizers, pasta, sandwiches, etc                      
               - AT LEAST 15 meals                DONE
               - ORGANISM display for each section    DONE
               - BOOTSTRAP card for each meal   DONE
- MANAGE react component state        DONE I THINK?
- RESPONSIVE to mobile users        DONE I THINK?

2. SHOULD
- ICONS for spicyness, vegan options, etc
- CHANGE menu based on time of day
- EMBEDDED NPM google map for location of restaurant

3. COULD
 - CREATE own JSON <!---TECHNICALLY DONE, DONT KNOW HOW TO CONNECT ON WEBSITE -->
- MODIFY title and meta tags using create-react-app
- IMPLEMENTING a doordash style online shopping card with temp save data for purchase
- USE React context
- SPECIALS menu that changes each day, kept in local storage so it never changes

4. WONT
- SHOW the restaurants failing health score

## BEGIN
1. Atoms
    - Description for each corresponding meal
    - Location
    - Icons

2. Molecules
    - Each meal and collective descriptions 
    - NPM locational data retrievable through google
    - Wireframe representation 

3. Organism 
    - Each section containing several meals
    - Interactive meals based on time of day/day of week
    - Doordash implementation

## INIT - VARIABLES & FUNCTIONS
1. Menu
    - displayMenu
    - const meals
    - meal.name, meal.price, etc
    - dailySpecials
        - VARIABLES for rendering and displaying menu as well as additional icons/specials

2. Online ordering
    - selectedMeal
    - mealNumber
    - confirmOrder
    - const confirm
    - userInput
        - VARIABLES for performing the necessary steps to place an order, such as updating a database or sending a request

3. Location
    - locationalData
        - VARIABLES for finding the restaurant through a search engine

## RENDER - FUNCTION STRUCTURE and OBJECTS

- import React, { useEffect, useState } from 'react';
- import { getData } from '../utils/data';   ???
- import { getLocalStorage } from '../utils/localStorage';   ???

1. function displayMenu () {
    - const ENDPOINT = 'MEALS';
    - const [meal, setMenu] = useState([menuItems]);
    - const [special, dailySpecials] = useState([specialItems]);

    - useEffect(() => {
        - let data = getLocalStorage(ENDPOINT);
        - if (data.length > 0) {
            - setMenu=data;
            - } else {
        - getData(ENDPOINT)
        - .then((data) => {
            -  setMenu(data);
            -  getLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

      - useEffect(() => {
        - let data = getLocalStorage(ENDPOINT);
        - if (data.length > 0) {
            - dailySpecials=data;
            - } else {
        - getData(ENDPOINT)
        - .then((data) => {
            -  dailySpecials(data);
            -  getLocalStorage(ENDPOINT, data);
        })
    }
  }, []);


    -  return (
      - <div>
        - <h2>Menu:</h2>
        -  {menuItems.map((meal) => (
          - <div key={meal.id} meal={meal}>

            - <div class = "card"> Name: {meal.name}</div>

            - <div class = "card"> Price: {meal.price}</div>

            - <div class = "card"> Spiciness: {meal.spicinessIcon}</div>

            - <div class = "card"> Vegan: {meal.veganIcon}</div>

            - <div class = "card"> Substitution Options: {meal.substitutionOptions}</div>

            - <div class = "card"> Description: {item.description}</div>

          - </div>
        -  ))};
        - <h2>Daily Specials:</h2>
        - {specialItems.map((special) => (
          - <div key={special.name}>

            - <div class = "card"> Name: {special.name}</div>

            - <div class = "card"> Price: {special.price}</div>

            - <div class = "card"> Description: {special.description}</div>

          - </div>
        ))}
      - </div>
    - );
  - };


2. function location() {
    - const [locationalData] ([]); }

3. function doorDash() {
    - const 
}



MAYBE ??
export function getLocalStorage(listName) {
  const saved = localStorage.getmeal(listName);
  return saved && saved.length > 0 ? JSON.parse(saved) : [];
}

## END