import '../styles/ChatListContainer.css'
import ChatList from './ChatList'
import ScrollableContainer from './ScrollableContainer'
import SearchAddChat from './SearchAddChat'

function ChatListContainer() {
  return (
    <>
      <SearchAddChat />
      <ScrollableContainer Comp={<ChatList />} />
    </>
  )
}

export default ChatListContainer
