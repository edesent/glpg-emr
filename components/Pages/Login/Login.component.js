import React from "react";
import { useForm } from "react-hook-form";
import { Error, Form, Links } from "./Login.styles";

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col h-screen content-center w-full justify-center bg-gray-100">
      <img
        src="/logo.svg"
        alt="Great Lakes Psychology Group"
        className="w-20 mx-auto mb-10"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Object.entries(errors).length !== 0 ? (
          <Error>All fields are required!</Error>
        ) : (
          ``
        )}
        <div>
          <input
            name="email"
            type="email"
            placeholder=" "
            ref={register({ required: true })}
          />
          <label htmlFor="">Email</label>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder=" "
            ref={register({ required: true })}
          />
          <label htmlFor="">Password</label>
        </div>
        <Links>
          <a href="">Forgot password?</a>
          <button>Login</button>
        </Links>
      </Form>
    </div>
  );
};

export default Login;
