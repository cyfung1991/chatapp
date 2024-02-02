import React, { useState } from 'react'
import {Modal, Form, Button } from 'react-bootstrap'
import { UseContacts } from '../contexts/ContactsProvider'
import { UseConversations } from '../contexts/ConversationsProvider'

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const { contacts } = UseContacts()
  const { createConversation } = UseConversations()
  
  function handleSubmit(e)
  {
    e.preventDefault()
    createConversation(selectedContactIds)
    closeModal()
  }
  function handleCheckboxChange(contactId)
  {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) 
      {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

  return (
    <>
    <Modal.Header closeButton> Create Conversation </Modal.Header>
    <Modal.Body>
        <form onSubmit={handleSubmit} >
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
        <Button type="submit">Create</Button> 
        </form>
    </Modal.Body>
    </>
  )
}
