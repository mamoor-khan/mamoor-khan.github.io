import { Align, MessageProps } from '../types/Message'

function MessageGroup({ messageList, date = '', align }: MessageProps) {
  return (
    <div
      className={`msg-group-container ${
        align === Align.LEFT ? 'jc-s' : 'jc-e'
      }`}
    >
      {messageList.map((msg) => (
        <div
          key={msg.id}
          className={`msg-block ${
            align === Align.LEFT ? 'bg-dark from' : 'bg-green to'
          }`}
        >
          <div className='text-container'>
            <span>
              <span className='text'>{msg.text}</span>
            </span>
            <span className='space'></span>
          </div>
          <span className='time'>{msg.time}</span>
        </div>
      ))}
    </div>
  )
}

export default MessageGroup
