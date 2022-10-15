import { ChangeEvent, useState } from 'react'

function SearchAddChat() {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <div className='search-add-chat-container'>
      <div className='search-bar'>
        <span>
          <img src={'img/search.svg'} alt='i' />
        </span>
        <input
          type='text'
          value={searchText}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchText(event.target.value)
          }
          placeholder='Search or start new chat'
        />
        {searchText !== '' && (
          <span className='cross-icon' onClick={() => setSearchText('')}>
            <img src={'img/cross.svg'} alt='i' />
          </span>
        )}
      </div>
      <span>
        <img src={'img/filter.svg'} alt='i' />
      </span>
    </div>
  )
}

export default SearchAddChat
