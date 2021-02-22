import React, { useEffect, useState } from'react'
import { connect } from 'react-redux';
import {Table,Button} from 'reactstrap'




function mapStateToProps(state) {
    return {
        user: state.userReducers.user
    };
}


 
export default connect(mapStateToProps)(function MyCountries(props){
    const [items, setItems] = useState([])

    const { user } = props
  
    useEffect(function () {
      var myHeaders = new Headers();
  
      var requestOptions = {
          method: 'get',
          headers: myHeaders,
      };

      fetch('http://localhost:5000/getUserWithCountry/' + user.id)    
      .then(response => response.json())
          .then((resJson) => {        
               console.log(user.id)    
              setItems(resJson.countries)
              console.log(resJson.countries)
              console.log(resJson.countries)
                   
          })
          .catch(error => console.log('error', error))
  
  }, []);

  function deleteCountry(item){
   // debugger;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch('http://localhost:5000/deleteCountry/' + item, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert('המדינה נמחקה בהצלחה ')
            console.log(result)
        })
        .catch(error => console.log('error', error));
  }
   
    return (
        <>
       
       <h5>My countries</h5>
      
  
       <Table hover size="sm">
         <thead>
           <tr>
             <th>countries</th>                           
             <th></th>            
           </tr>
         </thead>
         <tbody>
             { items.map((item, index)=> (
                 <tr key={index}>          
                 <td>{item._id}</td>
                 <td><Button onClick={() => deleteCountry(item._id)} outline color="secondary">delete country </Button></td>
               </tr>
                   
            ))}    
         </tbody>
       </Table>
   
        </>
    )
})


