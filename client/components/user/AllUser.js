import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AllUser = props => {
  const users = props.users
  if (!users) return <p>loading</p>
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(each => {
          return (
            <tr key={each.id}>
              <th scope="row">{each.id}</th>
              <td>{each.email}</td>
              <td>{each.isAdmin}</td>
              <td>
                <button type="button" className="btn btn-outline-warning">
                  DELETE
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
const mapStateToProps = state => {
  return {
    users: state.user.all
  }
}

export default connect(mapStateToProps)(AllUser)
