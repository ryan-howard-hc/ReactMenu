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
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ borderBottom: '1px solid #000', borderTop: '1px solid #000', padding: '10px 0' }}>Menu Items</h1>
          
          <div style={{ display: 'flex', justifyContent: 'center',  }}>
            <div style={{ flex: '50%', borderRight: '1px solid #000' }}>
              {menuItems.slice(0, 8).map(item => (
                <div className="card" key={item.id}>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">Spicy Level: {item.spicy_level}</p>
                </div>
              ))}
            </div>
            <div style={{ flex: '50%' }}>
              {menuItems.slice(8, 16).map(item => (
                <div className="card" key={item.id}>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">Spicy Level: {item.spicy_level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }