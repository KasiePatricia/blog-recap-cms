'use client'

import React from 'react'
import SearchInput from './search'

const SearchForAnArticle = () => {
  return (
    <SearchInput
      onSearch={() => { }}
      placeholder="Search for an article"
      className='max-w-[50.1rem]'
    />
  )
}

export default SearchForAnArticle