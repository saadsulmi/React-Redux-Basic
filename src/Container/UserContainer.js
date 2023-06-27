import React,{ useEffect } from 'react'
import { fetchUsers } from "../redux"
import { connect } from 'react-redux'

function UserContainer({userData,fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[])

  return userData.loading ? (
    <h2>Loading</h2>
  ): userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
        <h2>User List</h2>
        <div>
            {
                userData.users &&
                userData.users.map(user=><p>{user.name}</p>)
            }
        </div>
    </div>
  )

}

const mapStateProps = state =>{
    return{
        userData : state.user
    }
}

const mapDispatchToProp= dispatch => {
    
    return{
        fetchUsers :() => dispatch(fetchUsers())
    }
}


export default connect(mapStateProps,mapDispatchToProp)(UserContainer)
