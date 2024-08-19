import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: [],
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      message: `Form submitted successfully! Welcome ${prev.name}. Your interests are: ${prev.interests.join(', ')}`
    }));
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Coding"
              checked={formData.interests.includes('Coding')}
              onChange={handleChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Design"
              checked={formData.interests.includes('Design')}
              onChange={handleChange}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Music"
              checked={formData.interests.includes('Music')}
              onChange={handleChange}
            />
            Music
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

     
      {formData.message && <p>{formData.message}</p>}
    </main>
  );
}

export default App;
