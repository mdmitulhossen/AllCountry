import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const CountryDetails = () => {
    const {countyName}=useParams();
    const[country,setCountry]=useState([]);

    
    useEffect(()=>{
        const url=`https://restcountries.com/v3.1/name/${countyName}`;
             const cc=async()=>{
                const res =await fetch(url);
                const data= await res.json();
                
                setCountry(data);
             }
             cc();
        
    },[countyName])

        // const m = cou(countyName);
    // let myPromise = new Promise(function(myResolve, myReject) {
    //     // "Producing Code" (May take some time)
        
    //       myResolve(m); // when successful
    //       myReject("error");  // when error
    //     });
    //     myPromise.then(
    //         function(value) {setCountry(value) },
    //         function(error) { console.log(error) }
    //       );
    //
    
    
    // async function a(){
    //     const url=await fetch(`https://restcountries.com/v3.1/name/${countyName}`);
    //     const res=await url.json();
        
    //     console.log(res)
        
    // }
    // a();
   
    
    // const url=`https://restcountries.com/v3.1/name/${countyName}`;
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>setCountry(data))
    // console.log(country)
    if(!country[0]){
        return <h3>Looding....</h3>
    }
    return (
        
        <div>
            <h1>{countyName} :: Details comming soon....</h1>
            {/* <CC countryName={countyName}></CC> */}
            <h1>Capatal : {country[0].capital[0]}</h1>
          
            
            <Link to='/'><button>Back</button></Link>
        </div>
    );
};

export default CountryDetails;