function ChatItem() {
  return (
    <div className='chat-item'>
      <span>
        <img src={'img/user.svg'} alt='' />
      </span>
      <div className='chat-details'>
        <h3>Personal</h3>
        <p className={`${true ? 'pdl-2' : ''}`}>Scrollable container</p>
        <>
          {true && (
            <span className='status-icon'>
              <img src='img/double-check-blue.svg' alt='' />
            </span>
          )}
          <span className='time'>yesterday</span>
          <span className='pin'>
            <img src='img/pin.svg' alt='' />
          </span>
        </>
      </div>
    </div>
  )
}

export default ChatItem
