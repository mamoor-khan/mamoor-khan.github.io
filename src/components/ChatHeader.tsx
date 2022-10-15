import '../styles/ChatHeader.css'

function ChatHeader() {
  return (
    <div className='chat-header-container'>
      <span className='user-icon'>
        <img src='img/user.svg' alt='i' />
      </span>
      <div className='chat-user'>
        <h4>Personal</h4>
        <p>You</p>
      </div>
      <span>
        <img src='img/search.svg' alt='i' />
      </span>
      <span className='menu'>
        <img src='img/menu.svg' alt='i' />
      </span>
    </div>
  )
}

export default ChatHeader
