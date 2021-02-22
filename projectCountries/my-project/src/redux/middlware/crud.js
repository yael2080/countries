import axios from 'axios'
import React, { useState } from 'react'
import actions from '../action'
// import {setUserName} from './reducers/UserReducers'


export const newUser = ({ dispatch, getState }) => next => action => {

    if (action.type === 'NEW_USER') {
      //  debugger
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "name": action.payLoad.name,
        "password": action.payLoad.password,
        "email": action.payLoad.email
    });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }; fetch("http://localhost:5000/createUser", requestOptions)
            .then(user => {
                console.log("res", user)
            })
            .catch(error => console.log('error', error));
        // axios.post('http://localhost:5000/createUser', {
        //     "name": getState().userReducer.user.userName
        //     ,"password": getState().userReducer.user.password
        //     , "email": getState().userReducer.user.email})
        //     .then(res =>{debugger; console.log("res", res)})
        //     .catch(err=>{debugger; console.log(err);})
    } 
    return next(action);
};

export const getUser = ({ dispatch, getState}) => next => action => {
        
    if (action.type === 'GET_USER') {
      //  debugger
        axios.get('http://localhost:5000/getUser/' + action.payLoad.email +
        '/'+ action.payLoad.password + 
        '/'+action.payLoad.name )
        .then(result => {
            // console.log('קיים')
            console.log(result)
            if (result) {
             //   alert('המשתמש נכנס בהצלחה')
                console.log('dispatch',actions)
                console.log("id:",result.data.myUser._id);
                dispatch(actions.setId(result.data.myUser._id));
                dispatch(actions.setUserName(result.data.myUser.name));
               // flag(0)
                // debugger;

            }
            else {
                alert('אינו קיים במערכת ')
            }
        })
        .catch(error => {
            alert('אינו קיים במערכת ')
            console.log('error', error)
        });
}
    return next(action);
};



