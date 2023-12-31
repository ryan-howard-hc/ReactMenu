import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';

export default function Appetizers() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/menu/get_menu/')
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
            <h1 style={{ borderBottom: '1px solid #000', borderTop: '1px solid #000', padding: '10px 0' }}>Appetizers</h1>
          
          <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', borderRight: '1px solid #000' }}>
            <div style={{ flex: '50%' , borderRight: '1px solid #000'}}>
              {menuItems.slice(24, 28).map(item => (
                <div className="card" key={item.id}>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">Spicy Level: {item.spicy_level}</p>
                </div>
              ))}
            </div>
            <div className="col-md-6" style={{ flex: '50%' }}>
              {menuItems.slice(28, 32).map(item => (
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
      )
    }