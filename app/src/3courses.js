import React from 'react';
import { useEffect, useState} from 'react';

export default function Courses() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   axios.get('https://www.jsonkeeper.com/b/MDXW')
    //     .then(response => {
    //       setMenuItems(response.data);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching menu items', error);
    //       setLoading(false);
    //     });
    // }, []);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Menu Items</h1>
        {menuItems.map(item => (
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