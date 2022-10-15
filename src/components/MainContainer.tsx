import ChatContainer from './ChatContainer'
import ChatHeader from './ChatHeader'
import ChatListContainer from './ChatListContainer'
import UserHeader from './UserHeader'

function MainContainer() {
  return (
    <div className='main-container'>
      <section className='user-header'>
        <UserHeader />
      </section>
      <section className='chat-header'>
        <ChatHeader />
      </section>
      <section className='chat-list-container'>
        <ChatListContainer />
      </section>
      <section className='chat-container'>
        <ChatContainer />
      </section>
    </div>
  )
}

export default MainContainer
