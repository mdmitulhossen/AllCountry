export  async function getCountryDetails(countyName){
    const url=`https://restcountries.com/v3.1/name/${countyName}`;
             
                const res =await fetch(url);
                const data= await res.json();
                console.log(data);
                return data;                    
}