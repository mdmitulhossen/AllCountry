import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {flags,name,population,capital}=props.country;
    console.log(props.country)
  const style ={
    width:'15rem',
    float:'left',
    height:'20rem',
    marginRight:'10px',
    marginBottom:'10px',

  }
  
    return (
        <div className='container'>
                            <div className="card" style={style}>
                                  <img src={flags.png} className="card-img-top" alt="..." style={{width:'15rem',height:'8rem'}}/>
                                  <div className="card-body">
                                        <h6 className="card-text">Country Name:: {name.common}</h6>
                                        <p>Capital:: {capital}</p>
                                        <p>Population:: {population}</p>
                                        <Link to={`/country/${name.common}`}><button type="button" className="btn btn-info">Show Details</button></Link>
                                        
                                   </div>
                            </div>
        </div>
    );
};

export default Card;