import React from 'react'
import {useParams} from 'react-router'

const SearchTerm = () => {

    const {searchTerm} = useParams()
    return (
        isNaN(searchTerm)? 
        <div className="d-flex justify-content-center">
            <h3>The Word is: {searchTerm}</h3>
        </div>:
        <div className="d-flex justify-content-center">
            <h3>The number is: {searchTerm}</h3>
        </div>
    )
}

export default SearchTerm