import { useForm } from "react-hook-form";

import { zodResolver }
from "@hookform/resolvers/zod";

import { loginSchema }
from "../schemas/loginSchema";

function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver:
      zodResolver(loginSchema)
  });

  const onSubmit =
    async (data) => {

      await new Promise(
        resolve =>
          setTimeout(resolve, 2000)
      );

      console.log(data);

      alert("Login Successful");
    };

  return (

    <form
      onSubmit={
        handleSubmit(onSubmit)
      }
    >

      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Enter Email"

        {...register("email")}
      />

      <br />

      {errors.email && (
        <p>
          {errors.email.message}
        </p>
      )}

      <br />

      <input
        type="password"
        placeholder="Enter Password"

        {...register("password")}
      />

      <br />

      {errors.password && (
        <p>
          {errors.password.message}
        </p>
      )}

      <br />

      <button
        disabled={isSubmitting}
      >

        {
          isSubmitting
            ? "Submitting..."
            : "Login"
        }

      </button>

    </form>

  );
}

export default LoginForm;