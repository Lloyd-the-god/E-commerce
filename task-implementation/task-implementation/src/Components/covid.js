import React, { useEffect, useState } from 'react';
import './covid.css'


    

const Covid = () => {
    const [covidCases, setCovidCases] = useState([])

    var url = 'https://covidnigeria.herokuapp.com/api';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setCovidCases(data.data))
   
    }, [])
  return <>
    <div>

        <div>

            <table>
                <thead>
                    <tr>
                        <th> STATE</th>
                        <th> ID</th>
                        <th> CONFIRMED CASES</th>
                        <th> CASES ON ADMISSION</th>
                        <th>DISCHARGED</th>
                        <th>DEATHS</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        covidCases ? covidCases.states?.map((covidCase, idx) => ( 
                    <tr key={idx}> 
                        <td>{covidCase.state}</td>
                        <td>{covidCase._id}</td>
                        <td>{covidCase.confirmedCases}</td>
                        <td>{covidCase.casesOnAdmission}</td>
                        <td>{covidCase.discharged}</td>
                        <td>{covidCase.death}</td>
                    </tr>   
                         ) ) : null 
                     } 
                    
                </tbody>
            </table>
           
        </div>
    </div>
  
  </>
}

export default Covid;