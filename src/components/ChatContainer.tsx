import '../styles/ChatContainer.css'
import MessageContainer from './MessageContainer'
import ScrollableContainer from './ScrollableContainer'

function ChatContainer() {
  return (
    <>
      {/* Msg Container */}
      <ScrollableContainer
        Comp={<MessageContainer />}
        reverseScrolling={true}
      />

      {/* Msg Input */}
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
