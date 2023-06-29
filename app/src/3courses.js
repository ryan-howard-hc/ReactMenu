import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';

export default function Courses() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
          .then(response => {
            let data = response.data;
            setMenuItems(data);
          })
          .catch(error => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false);              //prevented eternal loading...
          });
      }, []);


      return (
        <div>
          <h1>Menu Items</h1>
          {menuItems.slice(0, 16).map(item => (     //stopped from loading a million items
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Spicy Level: {item.spicy_level}</p>
            </div>
          ))}
        </div>
      );
    }