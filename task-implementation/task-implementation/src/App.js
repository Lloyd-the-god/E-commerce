import './App.css';
import React, { useEffect } from 'react'
import{useDispatch, useSelector} from "react-redux";
import { getPosts} from "./redux/postSlice";


function App() {

  const {posts, loading} = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [])

  if(loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className='App'>
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
              { posts.states?.map((item, idx) => (
                <tr key={idx}> 
                  <td>{item.state}</td>
                  <td>{item._id}</td>
                  <td>{item.confirmedCases}</td>
                  <td>{item.casesOnAdmission}</td>
                  <td>{item.discharged}</td>
                  <td>{item.death}</td>
                </tr>   
                       ))}
              </tbody>
           </table>
           </div>
 

    </div>
  );
}

export default App;
