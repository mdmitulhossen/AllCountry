import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const{name,region}=props.country;
    const style = {
        width:'500px',
        border :'1px solid red',
        borderRadius:'10px',
        marginBottom:'20px',
        marginLeft:'100px',
        padding:'10px 0px 10px 2px',
        textAlign:'center'
    }
    return (
        <div style={style}>
            <h3>Country Name ::  <Link to={`/country/${name.common}`}>{name.common}</Link> </h3>
            <p>Region:: {region}</p>
        </div>
    );
};

export default Country;