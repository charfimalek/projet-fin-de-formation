import React, { useState } from 'react'

const Search = ({ history }) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <form onSubmit={searchHandler}>
            <div className="input-groupe">
                        <input
                        type="text"
                        id="search_field"
                        className="from-control"
                        placeholder="Enter Product Name ..."
                        onChange={(e) => setKeyword(e.target.value)}
                        />
                        <div className="input-groupe-append">
                            <button id="search_btn" className="btn">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
        </form>
    )
}

export default Search
