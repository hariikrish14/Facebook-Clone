import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate= useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    password: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
  });

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };
  const handleAlreadyLogin=()=>{
    navigate('/');
  }

  return (
    <div className="facebook-registration-container">
      <div className="registration-wrapper">
          <h1 className="facebook-logo">facebook</h1>
         <div className="registration-form-container">
            <div className='form-title-div'>
                <h2 className="form-title">Create an account</h2>
                <p className="form-subtitle">It's quick and easy.</p>
            </div>
          
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="birthday-section">
              <label className="section-label">Birthday</label>
              <div className="date-selectors">
                <select
                  name="birthDay"
                  value={formData.birthDay}
                  onChange={handleChange}
                  required
                  className="date-select"
                >
                  <option value="">Day</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select
                  name="birthMonth"
                  value={formData.birthMonth}
                  onChange={handleChange}
                  required
                  className="date-select"
                >
                  <option value="">Month</option>
                  {months.map((month, i) => (
                    <option key={month} value={i + 1}>{month}</option>
                  ))}
                </select>
                <select
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                  required
                  className="date-select"
                >
                  <option value="">Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="gender-section">
              <label className="section-label">Gender</label>
              <div className="gender-options">
                <label className="gender-label">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    required
                    className="gender-radio"
                  />
                  Female
                </label>
                <label className="gender-label">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    required
                    className="gender-radio"
                  />
                  Male
                </label>
                <label className="gender-label">
                  <input
                    type="radio"
                    name="gender"
                    value="custom"
                    checked={formData.gender === 'custom'}
                    onChange={handleChange}
                    required
                    className="gender-radio"
                  />
                  Custom
                </label>
              </div>
            </div>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Mobile number or email"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              className="form-input full-width"
            />
            <input
              type="password"
              name="password"
              placeholder="New password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input full-width"
            />


            <p className="terms-text">
              By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noreferrer" className="terms-link">Terms</a>, <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noreferrer" className="terms-link">Privacy Policy</a> and <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noreferrer" className="terms-link">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
            </p>

            <button
              type="submit"
              className="signup-button"
            >
              Sign Up
            </button>
            <button
                type='button'
                className='goto-login'
                onClick={handleAlreadyLogin}
            >
                Already have an account?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;