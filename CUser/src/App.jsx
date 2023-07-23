import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userlist/userList'
import NewUserForm from './components/newuser/NewUserForm'

function App() {
  const [users, setUsers] = useState([
  //   {
  //   firstName: "Otabek",
  //   lastName: "Khalimov",
  //   age: 20,
  //   from: 'Uzbekistan',
  //   image:'https://picsum.photos/400/600?random=1',
  //   job: 'dev',
  //   gender: 'MAALE',
  //   id: 1
  // },
])

// delete 

const userDelete = (id)=>{

setUsers ((prev)=>{
  return prev.filter((user)=>{
    return user.id !== id
  })
})
}

  return (
  <div>
    <Navbar usersLength = {users.length} />
    <main>
      <div className="no-users">
        <h2>  {users.length === 0 && <h2>No User</h2>} </h2>
      </div>

      <UserList  users = {users}  userDelete= {userDelete}/>
    </main>
    <button className="create-user">
    Create User
    </button>
      <NewUserForm/>
    <Footer/>
  </div>
  )
}

export default App
