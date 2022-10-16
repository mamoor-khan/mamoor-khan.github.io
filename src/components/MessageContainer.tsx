import { Align, Message } from '../types/Message'
import MessageGroup from './MessageGroup'

function MessageContainer() {
  const msg: Array<Message> = [
    {
      id: '101',
      text: 'this is some stupid msg.',
      time: '10:32',
    },
    {
      id: '102',
      text: 'second msg for testing some other things',
      time: '10:32',
    },
  ]
  return (
    <div className='message-container'>
      <MessageGroup messageList={msg} date='FRIDAY' align={Align.LEFT} />
      <MessageGroup messageList={msg} date='FRIDAY' align={Align.LEFT} />
    </div>
  )
}

export default MessageContainer
