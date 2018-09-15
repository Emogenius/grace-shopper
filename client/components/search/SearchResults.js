import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'

const SearchResults = props => {
  const {products} = props
  return (
    <div>
      <ul className="items">
        {products.map(prod => {
          return (
            <li key={prod.id}>
              <h2>"{prod.title}"</h2>
              {/* <h3>Price: {prod.price} $$</h3> */}
              <img src={prod.imageUrl} />
              <Link to={`/products/${prod.id}`}>
                <h3> pick me!</h3>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default connect()(SearchResults)
