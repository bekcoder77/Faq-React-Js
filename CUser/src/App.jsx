import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userlist/userList'

function App() {
  const [users, setUsers] = useState([{
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=1',
    job: 'dev',
    gender: 'MAALE',
    id: 1
  },
  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=2',
    job: 'dev',
    gender: 'MAALE',
    id: 2
  },
  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=3',
    job: 'dev',
    gender: 'MAALE',
    id: 3
  },
  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=4',
    job: 'dev',
    gender: 'MAALE',
    id: 4
  },
  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=5',
    job: 'dev',
    gender: 'MAALE',
    id: 5
  },
  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=6',
    job: 'dev',
    gender: 'MAALE',
    id: 99
  },  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=7',
    job: 'dev',
    gender: 'MAALE',
    id: 6
  },
  {
    firstName: "Otabek",
    lastName: "Khalimov",
    age: 20,
    from: 'Uzbekistan',
    image:'https://picsum.photos/400/600?random=8',
    job: 'dev',
    gender: 'MAALE',
    id: 14
  }

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

    <Footer/>
  </div>
  )
}

export default App
