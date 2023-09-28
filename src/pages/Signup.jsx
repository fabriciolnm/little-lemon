import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//Password Rules
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const Signup = () => {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(5)
        .matches(passwordRules, {
          message: "Please create a stronger password",
        })
        .required("Password is required"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password is required"),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <div>
      <a href="/reservation">
        <button className="text-md font-bold text-black p-4">Back</button>
      </a>
      <div className="flex flex-col bg-teal-900 p-4  justify-center items-center mb-40 pb-12">
        <h1 className="text-4xl mt-4 text-yellow-500">Sign up</h1>

        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-8 mt-8 p-4 border border-teal-800 rounded-md"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className={`text-sm mb-2 ${
                formik.touched.email && formik.errors.email
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-black px-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className={`text-sm mb-2 ${
                formik.touched.password && formik.errors.password
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : "Password"}
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-black px-2 rounded-sm"
            />
            <ul className="list-disc ml-4 text-gray-400 text-sm">
              <li>a minimum of 1 lower case letter [a-z]</li>
              <li>a minimum of 1 upper case letter [A-Z]</li>
              <li>a minimum of 1 numeric character [0-9]</li>
              <li>a minimum of 1 special character</li>
              <li>Passwords must be at least 5 characters in length</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirm"
              className={`text-sm mb-2 ${
                formik.touched.confirm && formik.errors.confirm
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              {formik.touched.confirm && formik.errors.confirm
                ? formik.errors.confirm
                : "Confirm your password"}
            </label>
            <input
              name="confirm"
              type="password"
              placeholder="Confirm your password"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              className="border border-black px-2 rounded-sm"
            />
          </div>
          <a href="/">
            <button
              type="submit"
              className="bg-yellow-500 w-full text-black  p-2 rounded-md mt-4"
            >
              Continue
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
