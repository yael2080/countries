import React from'react'
import { connect } from 'react-redux';
import actions from '../redux/action'
import { InputGroup, InputGroupAddon, Input, InputGroupText,Button ,Form, Container, Row, Col 
   } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import homeImg from '../img/homeImg.jpg';


function Login(props){  
 var user={}
    const newUsers= ()=>{
       
        props.setNewUser(user)

    }  
    const getUsers= ()=>{
         props.setGetUser(user)
    }  

return(
    <>
  
     <Container >
      <Row  >
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <br></br><br></br>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>user name: </InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e)=> {user.name=e.target.value}} name="name"  />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>password: </InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e)=> {user.password=e.target.value}} name="password"  />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>email: </InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e)=> {user.email=e.target.value}} name="email" />
      </InputGroup>
      <br /><br></br>
      <Button onClick={newUsers} outline color="secondary">register</Button> {'         ' }    
      
        <Button onClick={getUsers} outline color="secondary">login</Button> 

        </Col>
      </Row>
      </Container>
      <div></div>
      
       {/* <div>
       <label htmlForm="name">user name: </label>     
        <input onChange={(e)=> {user.name=e.target.value}} name="name"/>
         <label htmlForm="password">password: </label>     
        <input onChange={(e)=> {user.password=e.target.value}} name="password"/> 
       <label htmlForm="email">email: </label>     
        <input onChange={(e)=> {user.email=e.target.value}} name="email"/>
        <button onClick={newUsers} >הרשמה</button>       
        <button onClick={getUsers}>כניסה</button> 
    
        </div>  */}
    
    </> 
)
}

export default connect(
    (state) => {
        return {
            user: state.userReducers.user

        }
    },
    (dispatch) => {
        return {
            setUserName: (e) => dispatch(actions.setUserName(e)),
            setPassword: (e) => dispatch(actions.setPassword(e)),
            setEmail: (e) => dispatch(actions.setEmail(e)),
            setNewUser: (e) => dispatch(actions.newUser(e)),
            setGetUser: (e) => dispatch(actions.getUser(e))

        }
    }
)(Login);
{/* <img  className="im1"  src={homeImg} alt="homeImg"  />     */}
 {/* //props.user.id ? (<Redirect to={'/myCountries'}/>): */}
    
   
       {/* // props.user.id ? <Redirect to={'/myCountries'}/> : */}
    
    

       
        {/* <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">user name: </InputGroupAddon>
          <Input onChange={(e)=> {props.setUsername(e.target.value)}}/>
        </InputGroup> */}
        {/* <Form>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleUserName">User Name</Label>
        <Input onChange={(e)=> {props.setUsername(e.target.value)}}
         type="text"  id="exampleUserName" placeholder="with a placeholder" />
         <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
      </FormGroup>

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword">Password</Label>
        <Input onChange={(e)=> {props.setPassword(e.target.value)}}
         type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail">Email</Label>
        <Input onChange={(e)=> {props.setEmail(e.target.value)}}
         type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>


     <br />      
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">password: </InputGroupAddon>
          <Input onChange={(e)=> {props.setUsername(e.target.value)}}/>
        </InputGroup> 
      <br/>
        <InputGroup size="lg">   
          <InputGroupAddon addonType="prepend">email: </InputGroupAddon>
          <Input onChange={(e)=> {props.setEmail(e.target.value)}} name="email"/>
        </InputGroup>
      <br/>
        <Button onClick={newUsers} color="secondary">הרשמה</Button>{' '}
        <Button onClick={getUsers} color="secondary">כניסה</Button>{' '}
    </Form>
        */}