import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/loginSchema";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data) => {

    login(
      data.username,
      data.role
    );

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter Username"
          className="border p-2 w-full rounded"
          {...register("username")}
        />

        <p className="text-red-500 text-sm mb-3">
          {errors.username?.message}
        </p>

        <select
          className="border p-2 w-full rounded"
          {...register("role")}
        >

          <option value="">
            Select Role
          </option>

          <option value="employee">
            Employee
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

        <p className="text-red-500 text-sm mb-3">
          {errors.role?.message}
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white w-full py-2 rounded mt-4"
        >

          {
            isSubmitting
              ? "Logging In..."
              : "Login"
          }

        </button>

      </form>

    </div>

  );
}

export default Login;