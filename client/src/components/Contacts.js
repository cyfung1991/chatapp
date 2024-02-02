import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { UseContacts } from '../contexts/ContactsProvider'

export default function Contacts() {
    const { contacts } = UseContacts()

  return (
    <ListGroup variant="flush">
        { contacts.map(contact => (
            <ListGroupItem key={contact.id}>
                { contact.name }
            </ListGroupItem>
        ))}
    </ListGroup>
  )
}
