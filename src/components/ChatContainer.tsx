import '../styles/ChatContainer.css'

function ChatContainer() {
  return (
    <>
      <div className='msg-container'>ChatContainer</div>
      <div className='msg-input-container'>
        <span>
          <img src='img/emoji.svg' alt='i' />
        </span>
        <span>
          <img src='img/attachment.svg' alt='i' />
        </span>
        <div className='input-box'>
          <input type='text' placeholder='Type a message' />
        </div>
        <span>
          <img src='img/mic.svg' alt='i' />
        </span>
      </div>
    </>
  )
}

export default ChatContainer
