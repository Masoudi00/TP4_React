import React from 'react'

const Contact = (props) => {

const {name, phoneNumber, email} = props;

return(
    <div>

        <p><strong>name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phoneNumber}</p>
        <p><strong>Email: </strong>{email}</p>

    </div>
)
}

export default Contact;