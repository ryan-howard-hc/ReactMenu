import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from './1nav';
import Courses from './3courses';

export default function Menu() {
    useEffect(() => {
      axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then(response => {
          let data = response.data;
          console.log(data);
          // Handle the data or update state here
        })
        .catch(error => {
          console.error(error);
          // Handle error if necessary
        });
    }, []); // Empty dependency array to run effect only once
  
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }




    // axios.get(`https://www.jsonkeeper.com/b/MDXW`)
    //     .then(response => {
    //         setMenuItems(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error => {
    //         console.error(`Error fetching menu items`, error);
    //         setLoading(false);
    //     });


// export default function Menu () {
//     const [menuItems, data] = useState([]);
//     axios.get(`https://www.jsonkeeper.com/b/MDXW`)
//     .then(response => {
//         data(response.data);
//     })
//          console.log(data);
//         return (
//     <div>
//         <p> hello </p>
//     </div>
//         );
   
// }
// export async function getData() {
//     let response = await axios.get(`https://www.jsonkeeper.com/b/MDXW`);
//     let data = response.data;
//     return data;
//   }
  
//   console.log(getData());
