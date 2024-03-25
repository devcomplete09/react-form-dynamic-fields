import './App.css';
import { useState } from 'react';

// Dynamic form fields in React.js | Form validation
const App = () => {
  const [form, setForm] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  const isGenderOther = form?.gender === 'other';
  const isDeliveryToOther = form?.deliverTo === 'other';

  return (
    <div>
      <form onSubmit={ (e) => onSubmit(e) } className="myForm">
        <input
          type="text"
          className="myInput"
          placeholder="Name"
          required={ true }
          onChange={(e) => setForm({
            ...form,
            name: e.target.value
          })}
        />
        <input
          type="email"
          required={ true }
          className="myInput"
          placeholder="Email"
          onChange={(e) => setForm({
            ...form,
            email: e.target.value
          })}
        />
        <select className="mySelect"
          required={ true }
          onChange={(e) => setForm({
            ...form,
            gender: e.target.value,
            otherGender: e.target.value !== 'other' ? '' : form.otherGender
          })}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other Gender</option>
        </select>
        {
          isGenderOther ? <input
            type="text"
            required={ true }
            className="myInput"
            placeholder="Gender"
            onChange={(e) => setForm({
              ...form,
              otherGender: e.target.value
            })}
          /> : null
        }
        <select className="mySelect"
          required={ true }
          onChange={(e) => setForm({
            ...form,
            deliverTo: e.target.value,
            otherDeliveryTo: e.target.value !== 'other' ? '' : form.otherDeliveryTo
          })}>
          <option value="">Delivery to</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="other">Other Delivery To</option>
        </select>
        {
          isDeliveryToOther ? <input
            type="text"
            required={ true }
            className="myInput"
            placeholder="Delivery to"
            onChange={(e) => setForm({
              ...form,
              otherDeliveryTo: e.target.value
            })}
          /> : null
        }
        <button type="submit" className="myBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
