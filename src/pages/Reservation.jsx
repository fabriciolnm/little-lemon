import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Reservation = () => {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      date: "Tuesday",
      time: "",
      dinners: "",
      occasion: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      date: Yup.string()
        .oneOf(
          ["tuesday", "wednesday", "thursday", "friday", "saturday"],
          "Required"
        )
        .required("Required"),
      time: Yup.string()
        .oneOf(["18", "19", "20", "21", "22"], "Required")
        .required("Required"),
      dinners: Yup.string()
        .oneOf(["2", "4", "6", "8"], "Required")
        .required("Required"),
      occasion: Yup.string()
        .oneOf(["birthday", "business", "divorce"], "Required")
        .required("Required"),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <div className="text-white">
      <div className="bg-teal-900 w-full p-6 md:pb-24 md:flex flex-shrink-0 items-center justify-center gap-32 ">
        <div>
          <h1 className="text-4xl md:text-6xl text-yellow-500">Little Lemon</h1>
          <p className="text-2xl md:text-4xl">Chicago</p>
          <p className="text-xl md:text-2xl mb-4">
            Find a table for any occasion
          </p>

          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="date"
                  className={`text-sm mb-2 ${
                    formik.touched.date && formik.errors.date
                      ? "text-red-400"
                      : "text-white"
                  }`}
                >
                  {formik.touched.date && formik.errors.date ? (
                    formik.errors.date
                  ) : (
                    <br />
                  )}
                </label>
                <select
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Date</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="time"
                  className={`text-sm mb-2 ${
                    formik.touched.time && formik.errors.time
                      ? "text-red-400"
                      : "text-white"
                  }`}
                >
                  {formik.touched.time && formik.errors.time ? (
                    formik.errors.time
                  ) : (
                    <br />
                  )}
                </label>
                <select
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="time"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Time</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="time"
                className={`text-sm mb-2 ${
                  formik.touched.dinners && formik.errors.dinners
                    ? "text-red-400"
                    : "text-white"
                }`}
              >
                {formik.touched.dinners && formik.errors.dinners ? (
                  formik.errors.dinners
                ) : (
                  <br />
                )}
              </label>
              <select
                value={formik.values.dinners}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="dinners"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Number of Dinners</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="time"
                className={`text-sm mb-2 ${
                  formik.touched.occasion && formik.errors.occasion
                    ? "text-red-400"
                    : "text-white"
                }`}
              >
                {formik.touched.occasion && formik.errors.occasion ? (
                  formik.errors.occasion
                ) : (
                  <br />
                )}
              </label>
              <select
                value={formik.values.occasion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="occasion"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="business">Business</option>
                <option value="divorce">Divorce</option>
              </select>
            </div>
            <div className="mt-4 mb-4">
              <legend className=" text-sm font-semibold leading-6  text-white">
                Seating options
              </legend>
              <div className="space-y-4 ">
                <div className="flex mt-4 items-center gap-x-3 justify-between">
                  <label
                    htmlFor="push-notifications"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Standard
                  </label>
                  <input
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-center gap-x-3 justify-between">
                  <label
                    htmlFor="push-notifications"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Outside
                  </label>
                  <input
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
              </div>
              <a href="/signup">
                <button
                type="submit"
                className="bg-yellow-500 text-black p-2 w-full rounded-md mt-4">
                  Lets go
                </button>
              </a>
            </div>
          </form>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-8 w-52 h-auto m-12 md:m-0">
          <img src="public/static/images/restaurant chef B.jpg" alt="restaurant" />
          <img src="public/static/images/restaurant.jpg" alt="restaurant" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
