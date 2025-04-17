import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for Booking Be Ready for the Trip!!!");

    setFormData({
      destination: "",  // <-- or 'title' if you're still using that
      firstName: "",
      lastName: "",
      month: "",
      day: "",
      year: "",
      peopleCount: "",
    });
  };

  return (
    <div className="top">
    <div className="top4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">FLIGHT RESERVATION</h1>
        <p className="text-gray-500">
          Please make sure that you fill in the name which is in your passport.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md mt-6 w-full max-w-2xl"
      >
        {/* Passenger Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Passenger Name
          </label>
          <div className="in">
            {/* <input
              type="text"
              name="title"
              placeholder="Destination"
              value={formData.title}
              onChange={handleChange}
              className="w-1/4 p-2 border border-gray-300 rounded-md"
            /> */}
            <label className="lab1">
            Desination: 
          </label>
          {/* <div className="flex space-x-2 mt-2"> */}
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              // className="w-1/3 p-2 border border-gray-300 rounded-md"
            >
              <option value="">United Kingdom</option>
              <option value="January">Japan</option>
              <option value="February">India</option>
              <option value="March">Srilanka</option>
              <option value="April">Russia</option>
              <option value="May">China</option>
              <option value="June">Antartica</option>
              <option value="July">Africa</option>
              <option value="August">Australia</option>
            </select>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/3 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/3 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
{/* this is peoples */}
        <label className="block text-gray-700 font-semibold">
    Number of People Traveling
  </label>
  <input
    type="number"
    name="peopleCount"
    min="1"
    max="10"
    value={formData.peopleCount}
    onChange={handleChange}
    className="w-1/3 p-2 mt-2 border border-gray-300 rounded-md"
    placeholder="Count"
  />

        {/* Date of Birth */}
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-semibold">
            Date of Birth
          </label> */}
          <div className="flex space-x-2 mt-2">
          <label className="block text-gray-700 font-semibold">
            Date of Birth
          </label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="w-1/3 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Please select a month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <select
              name="day"
              value={formData.day}
              onChange={handleChange}
              className="w-1/4 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Please select a day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-1/3 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Please select a year</option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={2025 - i}>
                  {2025 - i}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Next Button */}
        <div>
          <button
            type="submit"
            className="foot"
          >
            Submmit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
