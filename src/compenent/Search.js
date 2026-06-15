import React from 'react'
import '../css/search.css'

const SearchInput = ( {search, setSearch}) => {
    const handelChange = (e) => {
        console.log(search)
        setSearch(e.target.value)
    }



  return (
    <div className='search'>
        <input type="text" placeholder='ابحث بالاسم او المدينة ' value={search} onChange={handelChange}   />
    </div>
  )
}

export default SearchInput  