import produce from 'immer';
import execHandler from './reducerUtils'

const initialState = {
user: {
       name: "",
       password: "",
       email: "",
       id: ""
    }
};

const user = { 
    setUserName(state, action){
        state.user.name = action.payLoad
    },
    setPassword(state, action){
        state.user.password = action.payLoad
    },
    setId(state, action){
        state.user.id = action.payLoad
    }

}

export default produce((state, action)=>{
    execHandler(state, action, user)
}, initialState)