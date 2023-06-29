import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './1nav';
import Courses from './3courses';


    // axios.get(`https://www.jsonkeeper.com/b/MDXW`)
    //     .then(response => {
    //         setMenuItems(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error => {
    //         console.error(`Error fetching menu items`, error);
    //         setLoading(false);
    //     });

    export default function Menu() {
        let response = axios.get(`https://www.jsonkeeper.com/b/MDXW`);
        let data = response.data;
        return data;
      }
      
      console.log(Menu());

