import React, {useRef} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { UseContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal }) {
    const idRef = useRef()
    const nameRef = useRef()
    const { createContact } = UseContacts()

    function handleSubmit(e)
    {
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }
  return (
    <>
    <Modal.Header closeButton> Create Contact </Modal.Header>
    <Modal.Body>
        <form onSubmit={handleSubmit} >
        <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
        </Form.Group>
        <Button type="submit">Create</Button>
        </form>
    </Modal.Body>
    </>
  )
}
