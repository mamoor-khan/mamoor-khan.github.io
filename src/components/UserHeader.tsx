import '../styles/UserHeader.css'

function UserHeader() {
  return (
    <>
      <div className='user-logo'>
        <img src={'img/user.svg'} alt='user' />
      </div>
      <span>
        <img src={'img/circle.svg'} alt='i' />
      </span>
      <span>
        <img src={'img/message.svg'} alt='i' />
      </span>
      <span className='menu-icon'>
        <img src={'img/menu.svg'} alt='i' />
      </span>
    </>
  )
}

export default UserHeader
