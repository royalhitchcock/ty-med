import React from "react";
import { useState } from "react"
import {Buttons} from '../../ui/Butttons';
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "../user/userSlice";
import { Box } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  
    if(!username) return;
    dispatch(updateName(username));
    navigate('/dashboard');
  }
  return (
    <Box sx={{textAlign: 'center'}}>
      <Form method="POST" onSubmit={handleSubmit}>
        <h1>
          Login Here
        </h1>
        
        <input 
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="input mb-8 w-72 rounded-full p-1 focus:border-slate-200 focus:p-2 transition duration-1000"
          />

        {username !== '' && (
          //<form>
            <Buttons type="submit">Login</Buttons>
          //</form>
        )}
      </Form>
    </Box>
  )
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);

  return null;
}