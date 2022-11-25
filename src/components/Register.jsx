import React, { useState } from "react";
import {
  Form,
  FormText,
  FormGroup,
  FormFeedback,
  Button,
  Input,
  Label,
} from "reactstrap";
import {useMutation} from 'react-query';
import { checkUsername } from "./getData";
import { checkEmail } from "./getData";
import { register } from "./getData";
import { validate } from 'react-email-validator';
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const navigate=useNavigate()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [isValidU,setIsValidU] = useState(null)
    const [isValidP,setIsValidP] = useState(null)
    const [isValidE,setIsValidE] = useState(null)
    const [success,setSuccess] = useState(null)
    const [msg,setMsg] = useState('')

//USERNAME
    const mutationCheckUsername=useMutation(checkUsername,{
      onSuccess:(data)=>{
        console.log(data.data.rowCount,data.data.username)
        if(data.data.rowCount==0)
          setIsValidU(true)
        else
          setIsValidU(false)
      }
    })

    const handleCheckUsername = () =>{
      if(username)
        mutationCheckUsername.mutate({username:username})
      else
        setIsValidU(false)
    }

//EMAIL
    const handleCheckEmail = () =>{
      if(validate(email))
        mutationCheckEmail.mutate({email:email})
      else
        setIsValidE(false)
    }

    const mutationCheckEmail=useMutation(checkEmail,{
      onSuccess:(data)=>{
        console.log(data.data.rowCount,data.data.email)
        if(data.data.rowCount==0)
          setIsValidE(true)
        else
          setIsValidE(false)
      }
    })

//PASSWORD
const handleCheckPassword = () =>{
  password.length<6 ? setIsValidP(false) : setIsValidP(true)
}

//REGISTER
const mutationCheckRegister=useMutation(register,{
  onSuccess:(data)=>{
    if(data.data?.id){
      setSuccess(true)
      setUsername('')
      setPassword('')
      setEmail('')
      setIsValidU(null)
      setIsValidP(null)
      setIsValidE(null)
    }
    else{
      setSuccess(false)
    }
    setMsg(data.data.msg)
  }
})

  return (
    <Form className="loginpanel p-3 border shadow mt-3">
      <h1 className="mb-5">Register</h1>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input 
          className= {isValidU==null ? "" :(isValidU ? "is-valid" : "is-invalid")}
          onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("email").focus() : ''}
          onBlur={handleCheckUsername}
          value={username} 
          autoFocus 
          onChange={(e)=>setUsername(e.target.value)} />
        <FormFeedback>This username already used!</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
        type="email" 
        id="email" 
        className={isValidE==null ? "" :(isValidE ? "is-valid" : "is-invalid")} 
        onBlur={handleCheckEmail} 
        onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("password").focus() : ''} 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} />
        <FormFeedback>This email address already used or wrong email!</FormFeedback>
        <FormText>
          <ul className="important">
            <li>Must be contain '@' character</li>
          </ul>
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="password">Password</Label>
        <Input 
        type="password" 
        id="password" 
        className= {isValidP==null ? "" :(isValidP ? "is-valid" : "is-invalid")}
        onBlur={handleCheckPassword}
        value={password}
        onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("email").focus() : ''} 
        onChange={(e)=>setPassword(e.target.value)} />
        <FormFeedback >Password is less than 6 characters!</FormFeedback>
        <FormText>
          <ul className="important">
            <li>Minimum 6 character!</li>
          </ul>
        </FormText>
      </FormGroup>

      <div className="text-center">
      <Input 
      id="done"
      type="button" 
      disabled={!isValidU || !isValidP || !isValidE} 
      value="Register" 
      className="btn btn-dark"
      onClick={()=>mutationCheckRegister.mutate({username:username,email:email,password:password})}
      />
      </div>
      <h4 className="msg text-center m-3 text-success">{msg}</h4>
      {success && <div className="d-flex justify-content-center btn btn-outline-dark" onClick={()=>navigate('/login')}>Log in</div>}
    </Form>
  );
};
