import React, {useState} from 'react'
import Search from './Search'

const Controls = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <Search search={search} setSearch={setSearch()}/>
    </>
  )
}

export default Controls