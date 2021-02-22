import React, { useEffect, useState } from'react'
import { connect } from 'react-redux';
import {Table,Button} from 'reactstrap'




function mapStateToProps(state) {
    return {
        user: state.userReducers.user
    };
}


 
export default connect(mapStateToProps)(function Countries(props){
  const [items, setItems] = useState([])

  const { user } = props
 // const userId = user.id

  
  useEffect(function () {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'get',
        headers: myHeaders,
    };
 
    

  //  debugger;
    fetch("https://api.covid19api.com/summary")    
    .then(response => response.json())
        .then((resJson) => {        
           console.log(user._id)    
            setItems(resJson.Countries)
        // console.log(resJson.Countries[0])
                 
        })
        .catch(error => console.log('error', error))

}, []);


    function addCountry(item){
       

           
        //     const data = { "country": item.Country, "totalConfirmed": item.TotalConfirmed, "totalDeaths": item.TotalDeaths, "totalRecovered": item.TotalRecovered }
 
        // fetch('http://localhost:5000/addCountry/' + user.name + '/' + user.password, {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ data })
        // })
        //     .then((res) => res.json()).then((resJson) => {
        //         alert('המתכון נוסף לרשימת המתכונים')
        //         console.log(resJson)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        const data = { "country": item.Country}
    debugger
        fetch('http://localhost:5000/addCountry/' + user.id , {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        })
            .then((res) => res.json()).then((resJson) => {
                alert('  המדינה נוספה בהצלחה ')
                console.log(resJson)
            })
            .catch((err) => {
                console.log(err)
            })
        
    }
    return (
        <>
       
    <Table hover size="sm">
      <thead>
        <tr>
          <th>Countries</th>
          <th>TotalConfirmed</th>
          <th>TotalDeaths</th>         
          <th>TotalRecovered</th>               
          <th></th>            
        </tr>
      </thead>
      <tbody>
          { items.map((item, index)=> (
              <tr key={index}>          
              <td>{item.Country}</td>
              <td>{item.TotalConfirmed}</td>
              <td>{item.TotalDeaths}</td>
              <td>{item.TotalRecovered}</td>
              
              <td><Button onClick={() => addCountry(item)} outline color="secondary">add country </Button></td>
            </tr>
                
         ))}    
      </tbody>
    </Table>



        </>
    )
})


