import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
    console.log(formData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>REGISTRATION FORM</h2>

        <div className="form-grid">

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Gender</label>
            <select name="gender" onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label>Course</label>
            <select name="course" onChange={handleChange}>
              <option value="">Select</option>
              <option>Java Full Stack</option>
              <option>Python Full Stack</option>
              <option>Data Science</option>
            </select>
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="full">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter Address" onChange={handleChange}>
              </textarea>
          </div>


        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;