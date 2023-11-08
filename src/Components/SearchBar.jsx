import React, { useState } from 'react';

import "./S.css"
function SearchBar() {
  const [User, setUser] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState(''); 

  const AddContact = () => {
    if (name && phoneNumber && email) {
      const newContact = {
        id: Date.now(),
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
  

  const removeContact = (id) => {
    const updatedContacts = User.filter((contact) => contact.id !== id);
    setUser(updatedContacts); 
  };

  const filteredItems = User.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase()) 
  );

  return (

    <>
    <div className='Main-Div'>
    <div>
      <input
        className='form-control m-2 Searchbar'
        placeholder="Search...  "
        style={{ width: '300px' }}
         type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <ul className='list-group'>
        {filteredItems.map((item) => (
          <li key={item.id} className='list-group-item list-group-item-success'>
           <strong>Name:</strong> {item.name} <br />
           <strong>Phone Number:</strong> {item.phoneNumber} <br />
           <strong>Email:</strong> {item.email} <br />

        <button className="btn btn-danger" onClick={() => removeContact(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
      <fieldset className="fieldset-border">
      <legend><strong>Add Contact:</strong></legend>
      <div className="form-group Div2">
        <input
          type="text"
          className="form-control m-2"
          style={{ width: '300px' }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          style={{ width: '300px' }}
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          style={{ width: '300px' }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={AddContact} className="btn btn-success">
          Add 
        </button>
      </div>
      </fieldset>
      </div>
    </>
  );
}

export default SearchBar;
