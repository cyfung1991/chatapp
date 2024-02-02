import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { UseConversations } from '../contexts/ConversationsProvider'

export default function Conversations() {
  const { conversations, selectConversationIndex } = UseConversations()

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          onClick={ () => selectConversationIndex(index)}
          action
          active={conversation.selected}
        >
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
