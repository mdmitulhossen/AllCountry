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
        return <h6>Looding....</h6>
    }
    const {flags,capital,area,independent,name,region}=country[0];
    const style={
        width:'30rem',
        height:'25rem',
        border: '2px solid red',
        padding:'20px',
        textAlign:'center',
        margin:'0 auto',
        borderRadius:'10px',
        background:`lightblue url(${flags.png}) noRepeat fixed center`
    }
    return (
        
        <div style={style} >
            <h3>Country Name:: {countyName}</h3>
            <h6>Official Name:: {name.official}</h6>
            {/* <CC countryName={countyName}></CC> */}
            <h5>Capatal : {capital}</h5>
             <p>Area:: {area}</p>
             {independent?<p>Indepandent:: YES</p>:<p>Indepandent:: NO</p>}
             
             <p>Region:: {region}</p>
            
            <Link to='/'><button type="button" className="btn btn-success">Back Home</button></Link>
        </div>
    );
};

export default CountryDetails;