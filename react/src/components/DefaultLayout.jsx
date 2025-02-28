import React from 'react'
import { Link, Outlet, Navigate } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import '../index.css'
export default function DefaultLayout() {
    const {user,token} = useStateContext()
    console.log(user,token)
    if(token){
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
      ev.preventDefault()
      localStorage.removeItem('token')
      console.log('logout')
    }
    
  return (   
    <div id='defaultLayout'>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className='content'>
        <header>
          <div>
            header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
      </div>
  )
}
