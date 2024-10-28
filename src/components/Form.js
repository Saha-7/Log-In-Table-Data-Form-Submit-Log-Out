import React, { useState } from 'react';
import { checkValidFormData } from '../utils/validate';  

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationMessage = checkValidFormData(formData.name, formData.email, formData.phone, formData.address);
   
    if (validationMessage) {
      setError(validationMessage);
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage("Form submitted successfully!");
    setSubmittedData({ ...formData });
 
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
    });
  };

  return (
    <div className="max-w-96 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg hover:border-black border">
      <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

      {error && <p className="p-2 text-red-700">{error}</p>}
      {successMessage && <p className="p-2 text-green-700">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <textarea
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 w-full rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      {submittedData && successMessage && (
        <div className="mt-8 p-6 bg-gray-200 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Submitted Data:</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-2"><strong>Name:</strong> {submittedData.name}</p>
            <p className="mb-2"><strong>Email:</strong> {submittedData.email}</p>
            <p className="mb-2"><strong>Phone Number:</strong> {submittedData.phone}</p>
            <p className="mb-2"><strong>Address:</strong> {submittedData.address}</p>
            <p className="mb-2"><strong>Gender:</strong> {submittedData.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
