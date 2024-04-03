import React, { useState, useEffect } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/contact');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to fetch contacts. Please try again later.');
        setLoading(false);
        alert(error);
      }
    };
    fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>Name:</strong> {contact.name}<br />
            <strong>Email:</strong> {contact.email}<br />
            <strong>Message:</strong> {contact.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

