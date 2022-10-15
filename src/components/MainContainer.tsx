import ChatListContainer from './ChatListContainer'
import UserHeader from './UserHeader'

function MainContainer() {
  return (
    <div className='main-container'>
      <section className='user-header'>
        <UserHeader />
      </section>
      <section className='chat-header'></section>
      <section className='chat-list-container'>
        <ChatListContainer />
      </section>
      <section className='chat-container'></section>
    </div>
  )
}

export default MainContainer
