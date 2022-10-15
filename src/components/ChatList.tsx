import ChatItem from './ChatItem'

enum MessageStatus {
  SENT,
  DELIVERED,
  SEEN,
  NOT_APPLICABLE,
}

type Chat = {
  id: string
  imageUrl: string
  chatName: string
  lastMessage: string
  dateTime: Date
  isPinned: Boolean
  statusIcon: MessageStatus
}

function ChatList() {
  return (
    <div className='chats-container'>
      <div className='scrollable-container'>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  )
}

export default ChatList
