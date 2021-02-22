import React from 'react'
import { connect } from 'react-redux'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Countries from './countries'
import MyCountries from './myCountries'
import { Button  } from 'reactstrap';

function mapStateToProps(state) {
    return {
     user: state.userReducers.user
    }
}

export default connect(mapStateToProps)(function Routers(props) {
   

 const { user  } = props
     
    return (
        <>
        <br></br>
        
          {
           props.user.name &&
            <Router>
                <Link to='/routers'>
                   
                    <Button className='btn btn-primary btn-lg' >Add country </Button>
                </Link>
                <Link to='/myCountries'>              
                    <Button className='btn btn-primary btn-lg' style={{ marginLeft: 100 }}> My country </Button>
                </Link>
                <hr />
                <Switch>
                    <Route  path='/routers'>
                        <Countries></Countries>
                    </Route>
                    <Route path='/myCountries'>
                        <MyCountries></MyCountries>
                    </Route>
                </Switch>
            </Router>}
        </>
    )
})