import axios from "axios";
import React from 'react'
import { useForm } from 'react-hook-form';
import './SignInForm.css'
const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
      const signInApi = (data) => {
        // console.log({ fullName, email, password });
        axios
          .post("https://hiring-stackroots-server.herokuapp.com/auth/signin/user", {
          },)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
  return (
    <div className="form-signin">
        <form onSubmit={handleSubmit(onSubmit)} className="container form-box">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email",{required:true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
          />
          <error>
            {errors.email?.type === "required" && "*Email is Required"} 
            {errors.email?.type === "pattern" && "*Entered Email in wrong format"} 
          </error>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password",{required:true,minLength:8,maxLength:20})}
          />
          <error>
            {errors.password?.type === "minLength" && "*Entered password is lessthan 8 charcters"} 
            {errors.password?.type === "maxLength" && "*Entered password is morethan 20 Charcters"}  
          </error>
        </div>
        <div className="d-grid">
          <input className='btn btn-primary' type="submit" onClick={signInApi}/>
        </div>
        </form>
    </div>
  )
}

export default SignInForm