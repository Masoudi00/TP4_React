import React, { useState } from 'react';

const AddContact = () => {
  const [User, setUser] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const AddCon = () => {
    if (name && phoneNumber && email) {
      const newContact = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
      };
      setUser([...User, newContact]);
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };
  const removeContact = (index) => {
    const updatedContacts = User.filter((_, i) => i !== index);
    setUser(updatedContacts);
  }

  return (
    <>
      <ul className='list-group'>
        {User.map((contact, index) => (
          <li key={index} className='list-group-item list-group-item-success '>
           <strong>Name:</strong>  {contact.name} <br /> <strong>Phone Number:</strong>  {contact.phoneNumber} <br /> <strong>Email:</strong>  {contact.email}
          <br />
           <button onClick={() => removeContact(index)} className='btn btn-danger'>Remove</button>
        </li>
        ))}
      </ul>

      <div className='form-group'>
        <input
          type="text"
          className='form-control m-2'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className='form-control m-2'
          placeholder='Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          className='form-control m-2'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={AddCon} className='btn btn-primary'>
          Add Contact
        </button>
        
      </div>
    </>
  );
};

export default AddContact;
