import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './1nav';
import Courses from './3courses';


useEffect(() => {
    axios.get(`https://www.jsonkeeper.com/b/MDXW`)
        .then(response => {
            setMenuItems(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(`Error fetching menu items`, error);
            setLoading(false);
        });
}, []);