import React from 'react';

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
                                        <button type="button" class="btn btn-info">Show Details</button>
                                   </div>
                            </div>
        </div>
    );
};

export default Card;