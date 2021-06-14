import React, { useState } from 'react'

interface Query {
    getQuery: any
}

const Search: React.FC<Query> = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q: string) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='input'
          placeholder='Filter Potmaat'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search