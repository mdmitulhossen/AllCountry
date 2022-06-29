import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const ShowCountry = () => {
    const[country,setCountry] =useState([]);

    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data))
        //console.log(data[0].name)
    },[])
    
    if(!country[0]){
        return <h6>Looding.....</h6>
    }
    // console.log(country[0].flags.png)


    return (
        <div className='container' >
            <h3>Number of country:: {country.length}</h3>
            {
                 //country.map(cn=><Country country={cn} key={cn.name.common}></Country>)
                 country.map(cn=><Card countryFlag={cn.flags.png} country={cn} key={cn.name.common}></Card>)
                //<Card countryFlag={country[0].flags.png}></Card>
            }
        </div>
    );
};

export default ShowCountry;