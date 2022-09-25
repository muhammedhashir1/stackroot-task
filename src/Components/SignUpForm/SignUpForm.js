import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './SignUpForm.css'
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const onSubmit = (data) => console.log(data);

  const signUpApi = (data) => {
    // console.log({ fullName, email, password });
    axios
      .post("https://hiring-stackroots-server.herokuapp.com/auth/signup/user", {
      },)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-signup">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container form-box-signup"
      >
        <h3>Sign Up</h3>
        <div className="">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            // value={fullName}
            // onChange={handleFullname}
            {...register("fullname", {
              required: true,
            })}
          />
          <error>
            {errors.fullname?.type === "required" && "name is required"}
          </error>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            // value={email}
            // onChange={handleEmail}
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          <error>
            {errors.email?.type === "required" && "*Email is Required"}
            {errors.email?.type === "pattern" &&
              "*Entered Email in wrong format"}
          </error>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            // value={password}
            // onChange={handlePassword}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
          />
          <error>
            {errors.password?.type === "minLength" &&
              "*Entered password is lessthan 8 charcters"}
            {errors.password?.type === "maxLength" &&
              "*Entered password is morethan 20 Charcters"}
          </error>
        </div>
        <div className="d-grid">
          <input
            className="btn btn-primary"
            type="submit"
            onClick={signUpApi}
          />
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

// const handleFullname = (e) =>{
//   setFullName(e.target.value)
// }
// const handleEmail = (e) =>{
//   setEmail(e.target.value)
// }
// const handlePassword = (e) =>{
//   setPassword(e.target.value)
// }
