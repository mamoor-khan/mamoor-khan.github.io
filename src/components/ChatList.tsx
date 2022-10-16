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
    <>
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
    </>
  )
}

export default ChatList
