import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactList() {
  const lists = [
    {
      id: 1,
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'jane@example.com',
    },
  ];

  return (
    <div>
      <ul className='list-group'>
        {lists.map((list) => (
          <li key={list.id} className='list-group-item list-group-item-danger'>
            
            <div>
              <strong>Name:</strong> {list.name}
            </div>
            <div>
              <strong>Phone Number:</strong> {list.phoneNumber}
            </div>
            <div>
              <strong>Email:</strong> {list.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
